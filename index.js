document.addEventListener("DOMContentLoaded", function() {
  setupInteractiveUI();
  buildAnimation(document.querySelector(".on"));
});

function setupInteractiveUI() {
  var buttonListener = function(e) {
    buildAnimation(e.target);
  };
  document.getElementById("web-animation").addEventListener("click",
                                                            buttonListener);
  document.getElementById("css-transition").addEventListener("click",
                                                             buttonListener);
  document.getElementById("css-animation").addEventListener("click",
                                                            buttonListener);
  document.getElementById("result-as-json").addEventListener("click",
                                                             downloadJSON);
}

function buildAnimation(button) {
  var buttonWebAnimation = document.getElementById("web-animation");
  var buttonCSSTransition = document.getElementById("css-transition");
  var buttonCSSAnimation = document.getElementById("css-animation");
  if (button == buttonWebAnimation) {
    window.animate = animateWebAnimation;
    buttonWebAnimation.classList.add("on");
    buttonCSSTransition.classList.remove("on");
    buttonCSSAnimation.classList.remove("on");
  } else if (button == buttonCSSTransition) {
    window.animate = animateCSSTransition;
    buttonWebAnimation.classList.remove("on");
    buttonCSSTransition.classList.add("on");
    buttonCSSAnimation.classList.remove("on");
  } else {
    window.animate = animateCSSAnimation;
    buttonWebAnimation.classList.remove("on");
    buttonCSSTransition.classList.remove("on");
    buttonCSSAnimation.classList.add("on");
  }
  makeEmpty(document.getElementById("results"));
  // return this thread to update ui immediately
  setTimeout(function() {
    build();
  }, 1);
}

function build() {
  Object.keys(CSSProperties).forEach(function (propertyName) {
    buildOne(propertyName, CSSProperties[propertyName]);
  });
}

function buildOne(propertyName, propertyData) {
  var animatables = propertyData["css-transition-animatables"];
  animatables = animatables ? animatables : [];
  var testcases = getTestcases(propertyData["test-datatypes"], animatables);
  var browserIndentity = getBrowserIdentity();
  var propertyNameWithPrefix = propertyName;
  if (CSSProperties[propertyName]["need-prefix"]) {
    var prefix =
      CSSProperties[propertyName]["need-prefix"][browserIndentity.browser];
    if (prefix) {
      propertyNameWithPrefix = prefix + "-" + propertyNameWithPrefix;
    }
  }
  testcases.forEach(function(testcase) {
    var result = execute(propertyNameWithPrefix, testcase.values);
    updateUI(propertyName, propertyNameWithPrefix, testcase, result);
  });
}

function animateWebAnimation(target, propertyName, idlName, values) {
  var keyframe = {};
  keyframe[idlName] = values;
  var animation = target.animate(keyframe, { duration: 1000, fill: "both" });

  var state0 = getComputedStyle(target)[idlName];
  animation.currentTime = 500;
  var state50 = getComputedStyle(target)[idlName];
  animation.currentTime = 1000;
  var state100 = getComputedStyle(target)[idlName];

  return { state0: state0, state50: state50, state100: state100 };
}

function animateCSSTransition(target, propertyName, idlName, values) {
  if (propertyName.match(/^transition-/)) {
    return { state0: "-", state50: "-", state100: "-" };
  }
  target.style[propertyName] = values[0];
  // Flush the computed style
  // @see https://dxr.mozilla.org/mozilla-central/source/dom/animation/test/testcommon.js#150
  getComputedStyle(target)[idlName];
  target.style.transition = propertyName + " 1s linear";
  target.style[propertyName] = values[1];
  var state0 = getComputedStyle(target)[idlName];

  target.style.transition = "";
  target.style[propertyName] = values[0];
  getComputedStyle(target)[propertyName]; // flush
  target.style.transition = propertyName + " 1s -0.5s linear";
  target.style[propertyName] = values[1];
  var state50 = getComputedStyle(target)[idlName];

  target.style.transition = "";
  target.style[propertyName] = values[0];
  getComputedStyle(target)[propertyName]; // flush
  target.style.transition = propertyName + " 1s -1s linear";
  target.style[propertyName] = values[1];
  var state100 = getComputedStyle(target)[idlName];

  return { state0: state0, state50: state50, state100: state100 };
}

function animateCSSAnimation(target, propertyName, idlName, values) {
  if (propertyName.match(/^animation-/)) {
    return { state0: "-", state50: "-", state100: "-" };
  }

  var keyframes = "@keyframes test {"
                  + "from {"+ propertyName +": " + values[0] + " }"
                  + "to {"+ propertyName +": " + values[1] + " }}";

  var stylesheet = document.styleSheets[document.styleSheets.length - 1];
  stylesheet.insertRule(keyframes, stylesheet.length);

  target.style.animation = "1s linear 0s both test";
  var state0 = getComputedStyle(target)[idlName];

  target.style.animationDelay = "-0.5s";
  var state50 = getComputedStyle(target)[idlName];

  target.style.animationDelay = "-1s";
  var state100 = getComputedStyle(target)[idlName];

  stylesheet.deleteRule(stylesheet.length - 1);

  return { state0: state0, state50: state50, state100: state100 };
}

function execute(propertyName, values) {
  var targetContainer = document.createElement("div");
  targetContainer.id = "target-container";
  var target = document.createElement("div");
  target.id = "target";
  targetContainer.appendChild(target);
  document.body.appendChild(targetContainer);

  try {
    var idlName = propertyToIDL(propertyName);
    return animate(target, propertyName, idlName, values);
  } catch (e) {
    return { error: e.name + ":" + e.message};
  } finally {
    document.body.removeChild(targetContainer);
  }
}

function getTestcases(datatypes, animatableDataTypeListBySpec) {
  var testcases = [];
  pushTestcase(testcases, datatypes, null, animatableDataTypeListBySpec, null);
  return testcases;
}

function pushTestcase(testcases, datatypeOrTestcases, originalDataType,
                      animatableDataTypeListBySpec, currentAnimatableDataType) {
  datatypeOrTestcases.forEach(function(datatypeOrTestcase) {
    if (Array.isArray(datatypeOrTestcase)) { // testcase
      testcases.push({ "animatableDataType": currentAnimatableDataType,
                       "originalDataType": originalDataType,
                       "values": datatypeOrTestcase });
      return; // return in forEach is same as continue in normal loop
    }
    // datatype
    var variable = CSSDataTypes[datatypeOrTestcase];
    if (!variable) {
      console.error(datatypeOrTestcase + " is not found.");
      return;
    }
    var isAnimatableBySpec =
      animatableDataTypeListBySpec.includes(datatypeOrTestcase);
    if (isAnimatableBySpec) {
      currentAnimatableDataType = datatypeOrTestcase;
    }
    var isRoot = !originalDataType;
    if (isRoot) {
      originalDataType = datatypeOrTestcase;
    }
    pushTestcase(testcases, variable.testcases, originalDataType,
                 animatableDataTypeListBySpec, currentAnimatableDataType);
    if (isRoot) {
      originalDataType = null;
    }
    if (isAnimatableBySpec) {
      currentAnimatableDataType = null;
    }
  });
}

function updateUI(propertyName, propertyNameWithPrefix, testcase, result) {
  var resultsElement = document.getElementById("results");
  var resultElement = appendElement("li", resultsElement, null, ["result"]);
  var dlElement = appendElement("dl", resultElement, null);

  var specLink = CSSProperties[propertyName]["link"];

  // Property column
  var propertyElement = appendElement("dd", dlElement, null, ["property"]);
  appendElement("a", propertyElement, propertyNameWithPrefix,
                ["spec"], { "href": specLink });

  // Testcase column
  var testcaseElement = appendElement("dd", dlElement, null, ["testcase"]);
  var testdataElement =
    appendElement("div", testcaseElement,
                  testcase.values[0] + RIGHT_ARROW + testcase.values[1]);
  if (testcase.animatableDataType) {
    var animtypeLink =
      CSSDataTypes[testcase.animatableDataType]["animtype-link"];
    var divElement = appendElement("div", testcaseElement, null);
    appendElement("a", divElement, testcase.animatableDataType,
                  ["css-transition-spec", "link"], { "href": animtypeLink });
  }

  // Result columns
  if (result.error) {
    appendElement("dd", dlElement, result.error, ["error-result"]);
    resultElement.classList.add("error");
  } else {
    // 0% column
    appendElement("dd", dlElement, result.state0, ["state0"]);
    // 5% column
    appendElement("dd", dlElement, result.state50, ["state50"]);
    // 100% column
    appendElement("dd", dlElement, result.state100, ["state100"]);
    var animatedType =
      getAnimatedType(result.state0, result.state50, result.state100);
    resultElement.classList.add(animatedType);
  }
}

function propertyToIDL(property) {
  if (property == "float") {
    return "cssFloat";
  }
  // https://drafts.csswg.org/cssom/#css-property-to-idl-attribute
  return property.replace(/-([a-z])/gi, function(str, group) {
    return group.toUpperCase();
  });
}

function makeEmpty(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function downloadJSON() {
  var downloadAnchor = document.createElement("a");

  var browserIdentity = getBrowserIdentity();
  var animationType = getAnimationType();

  var content = { browserName: browserIdentity.browser,
                  browserVersion: browserIdentity.version,
                  animationType: animationType };
  var results = {};
  var resultElements = document.querySelectorAll(".result");
  for (var i = 0, n = resultElements.length; i < n; i++) {
    var resultElement = resultElements.item(i);

    var property = {};
    var propertyName = resultElement.querySelector(".property a").textContent;

    var testcaseElement = resultElement.querySelector(".testcase");
    var testcase = testcaseElement.querySelector("div:first-child")
                   .textContent.split(RIGHT_ARROW);
    testcase[0] = toJSONValue(testcase[0]);
    testcase[1] = toJSONValue(testcase[1]);
    property.testcase = testcase;

    var cssTransitionElement = testcaseElement.querySelector("a");
    if (cssTransitionElement) {
      property["css-transition-datatype"] = cssTransitionElement.textContent;
    }

    var errorElement = resultElement.querySelector(".error-result");
    if (errorElement) {
      property.error = errorElement.textContent;
    } else {
      property.state0 =
        toJSONValue(resultElement.querySelector(".state0").textContent);
      property.state50 =
        toJSONValue(resultElement.querySelector(".state50").textContent);
      property.state100 =
        toJSONValue(resultElement.querySelector(".state100").textContent);
    }

    results[propertyName] = property;
  };
  content.results = results;

  var blob = new Blob([ JSON.stringify(content, null, "  ") ],
                      { "type" : "application/json" });

  downloadAnchor.download = browserIdentity.browser + browserIdentity.version +
                            "-" + animationType + ".json";
  downloadAnchor.href = window.URL.createObjectURL(blob);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
}

function toJSONValue(value) {
  return !isNaN(value) ? Number(value)
         : value == "undefined" ? undefined : value;
}

function getBrowserIdentity() {
  var result = navigator.userAgent.match(/(Firefox|Chrome)\/(\S+)/);
  if (result) {
    return { browser: result[1], version: result[2] };
  }
  return "unknown";
}

function getAnimationType() {
  var enabledElement = document.querySelector(".on");
  return enabledElement.id == "web-animation"
         ? "WebAnimation"
         : enabledElement.id == "css-transition"
         ? "CSSTransition"
         : "CSSAnimation";
}
