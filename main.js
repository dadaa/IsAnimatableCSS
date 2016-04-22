document.addEventListener("DOMContentLoaded", function() {
  setupInteractiveUI();
  enableAnimationWith(document.querySelector(".on"));
});

function setupInteractiveUI() {
  var buttonListener = function(e) {
    enableAnimationWith(e.target);
  };
  document.getElementById("web-animation").addEventListener("click",
                                                            buttonListener);
  document.getElementById("css-transition").addEventListener("click",
                                                            buttonListener);
}

function enableAnimationWith(button) {
  var buttonWebAnimation = document.getElementById("web-animation");
  var buttonCSSTransition = document.getElementById("css-transition");
  if (button == buttonWebAnimation) {
    window.createAnimation = createWebAnimation;
    buttonWebAnimation.classList.add("on");
    buttonCSSTransition.classList.remove("on");
  } else {
    window.createAnimation = createCSSTransition;
    buttonCSSTransition.classList.add("on");
    buttonWebAnimation.classList.remove("on");
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
  testcases.forEach(function(testcase) {
    var result = animate(propertyName, testcase.values);
    toUI(propertyName, testcase, result);
  });
}

function createWebAnimation(target, propertyName, values) {
  var keyframe = {};
  keyframe[propertyToIDL(propertyName)] = values;
  return target.animate(keyframe, { duration: 1000, fill: "both" });
}

function createCSSTransition(target, propertyName, values) {
  target.style[propertyName] = values[0];
  // Flush the computed style
  // @see https://dxr.mozilla.org/mozilla-central/source/dom/animation/test/testcommon.js#150
  getComputedStyle(target)[propertyName];
  var transition = propertyName + " 1s linear";
  target.style.transition = transition;
  target.style[propertyName] = values[1];

  var animations = target.getAnimations();
  // animations should be zero length if this property can't animate
  return animations.length == 0 ? {} : animations[0];
}

function animate(propertyName, values) {
  var target = document.createElement("div");
  target.id = "target";
  document.body.appendChild(target);

  try {
    var animation = createAnimation(target, propertyName, values);

    var fromResult = getComputedStyle(target)[propertyName];
    animation.currentTime = 500;
    var halfResult = getComputedStyle(target)[propertyName];
    animation.currentTime = 1000;
    var toResult = getComputedStyle(target)[propertyName];

    return { from: fromResult, half: halfResult, to: toResult };
  } catch (e) {
    return { error: e.name + ":" + e.message};
  } finally {
    document.body.removeChild(target);
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

function toUI(propertyName, testcase, result) {
  var resultType =
    result.from != result.to
    ? result.half != result.to
    ? "animated"
    : "discrete"
    : "ignored"

  var resultsElement = document.getElementById("results");
  var resultElement = appendElement("li", resultsElement, null, ["result"]);
  var dlElement = appendElement("dl", resultElement, null);

  var specLink = CSSProperties[propertyName]["links"][0];

  // Property column
  var propertyElement = appendElement("dd", dlElement, null, ["property"]);
  appendElement("a", propertyElement, propertyName,
                ["spec"], { "href": specLink });

  // Testcase column
  var testcaseElement = appendElement("dd", dlElement, null, ["testcase"]);
  var testdataElement = appendElement("div", testcaseElement);
  testdataElement.innerHTML =
    testcase.values[0] + "&rArr;" + testcase.values[1];
  if (testcase.animatableDataType) {
    var animtypeLink =
      CSSDataTypes[testcase.animatableDataType]["animtype-link"];
    var divElement = appendElement("div", testdataElement, null);
    appendElement("a", divElement, testcase.animatableDataType,
                  ["css-transition-spec", "link"], { "href": animtypeLink });
  }

  // Result columns
  if (result.error) {
    appendElement("dd", dlElement, result.error, ["error-result"]);
    resultElement.classList.add("error");
  } else {
    // 0% column
    appendElement("dd", dlElement, result.from, ["result0"]);
    // 5% column
    appendElement("dd", dlElement, result.half, ["result50"]);
    // 100% column
    appendElement("dd", dlElement, result.to, ["result100"]);
    resultElement.classList.add(resultType);
  }
}

function appendElement(tag, parent, content, classes, attributes) {
  var element = document.createElement(tag);
  if (classes) {
    classes.forEach(function(clazz) {
      element.classList.add(clazz);
    });
  }
  if (attributes) {
    Object.keys(attributes).forEach(function(key) {
      element.setAttribute(key, attributes[key]);
    });
  }
  if (typeof content === "undefined") {
    element.textContent = "undefined";
  } else if (content == null) {
  } else if (content.length == 0) {
    element.innerHTML = "&nbsp;";
  } else {
    element.textContent = content;
  }
  parent.appendChild(element);
  return element
}

function propertyToIDL(property) {
  if (property == 'float') {
    return 'cssFloat';
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
