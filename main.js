function propertyToIDL(property) {
  if (property == 'float') {
    return 'cssFloat';
  }

  // https://drafts.csswg.org/cssom/#css-property-to-idl-attribute
  return property.replace(/-([a-z])/gi, function(str, group) {
    return group.toUpperCase();
  });
}

function appendElement(tag, classes, content, parent) {
  var element = document.createElement(tag);
  classes.forEach(function(clazz) {
    element.classList.add(clazz);
  });
  if (typeof content === "undefined") {
    element.textContent = "undefined";
  } else if (content.length == 0) {
    element.innerHTML = "&nbsp;";
  } else {
    element.textContent = content;
  }
  parent.appendChild(element);
  return element
}

function toUI(propertyName, testcase, result) {
  var resultsElement = document.getElementById("results");
  var resultElement =
    appendElement("div", ["result"], "", resultsElement);

  var originalProperty = propertyName + ":" + JSON.stringify(testcase.values);
  var originalPropertyElement =
    appendElement("div", ["cell", "property"], originalProperty, resultElement);
  if (testcase.animatablePropertyName) {
    originalPropertyElement.classList.add("animatable");
    var animatablePropertyNameElement =
      appendElement("a", [],
                    testcase.animatablePropertyName, originalPropertyElement);
    var specLink = CSSDataTypes[testcase.animatablePropertyName].link;
    animatablePropertyNameElement.setAttribute("href", specLink);
  }

  if (result.error) {
    var errorElement = appendElement("div", ["cell", "error"],
                                     result.error, resultElement);
    resultElement.classList.add("error");
  } else {
    var resultClass =
      result.from != result.to
      ? result.half != result.to
      ? "animated"
      : "discrete"
      : "ignored"
    resultElement.classList.add(resultClass);

    appendElement("div", ["cell", "value"], result.from, resultElement);
    appendElement("div", ["cell", "value"], result.half, resultElement);
    appendElement("div", ["cell", "value"], result.to, resultElement);
  }
}

function pushTestcase(testcases, datatypeOrTestcases,
                      animatableListBySpec, animatablePropertyName) {
  datatypeOrTestcases.forEach(function(datatypeOrTestcase) {
    if (Array.isArray(datatypeOrTestcase)) {
      testcases.push({ "animatablePropertyName": animatablePropertyName,
                       "values": datatypeOrTestcase });
    } else {
      var variable = CSSDataTypes[datatypeOrTestcase];
      if (!variable) {
        console.error(datatypeOrTestcase + " is not found.");
      } else {
        if (animatableListBySpec.includes(datatypeOrTestcase)) {
          animatablePropertyName = datatypeOrTestcase;
        }
        pushTestcase(testcases, variable.testcases,
                     animatableListBySpec, animatablePropertyName);
      }
    }
  });
}

function getTestcases(datatypes, animatableListBySpec) {
  var testcases = [];
  pushTestcase(testcases, datatypes, animatableListBySpec, null);
  return testcases;
}

function animate(propertyName, values) {
  var target = document.createElement("div");
  target.id = "target";
  document.body.appendChild(target);
  var keyframe = {};
  keyframe[propertyToIDL(propertyName)] = values;
  var animation;
  try {
    animation = target.animate(keyframe,
                               { duration: 1000, fill: "both" });
  } catch (e) {
    return { error: e.name + ":" + e.message};
  }
  var fromResult = getComputedStyle(target)[propertyName];
  animation.currentTime = 500;
  var halfResult = getComputedStyle(target)[propertyName];
  animation.currentTime = 1000;
  var toResult = getComputedStyle(target)[propertyName];

  document.body.removeChild(target);
  return { from: fromResult, half: halfResult, to: toResult };
}

function buildOne(propertyName, propertyData) {
  var testcases = getTestcases(propertyData["test-datatypes"],
                               propertyData["animatables"]);
  testcases.forEach(function(testcase) {
    var result = animate(propertyName, testcase.values);
    toUI(propertyName, testcase, result);
  });
}

function build() {
  Object.keys(CSSProperties).forEach(function (propertyName) {
    buildOne(propertyName, CSSProperties[propertyName]);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var resultsElement = document.getElementById("results");
  var resultElement =
    appendElement("div", ["result"], "", resultsElement);

  appendElement("div", ["cell", "property"], "CSS property and test values",
                resultElement);
  appendElement("div", ["cell", "value"], "0%", resultElement);
  appendElement("div", ["cell", "value"], "50%", resultElement);
  appendElement("div", ["cell", "value"], "100%", resultElement);

  build();
});
