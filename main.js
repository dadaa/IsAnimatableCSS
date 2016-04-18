function execute(property, from, to) {
  if (typeof property === 'undefined') {
    console.error("property is undefined");
    return;
  }
  if (typeof from === 'undefined') {
    console.error("from is undefined");
    return;
  }
  if (typeof to === 'undefined') {
    console.error("to is undefined");
    return;
  }

  var target = document.createElement("div");
  target.id = "target";
  document.body.appendChild(target);
  var keyframe = {};
  keyframe[property] = [from, to];
  var animation;
  try {
    animation = target.animate(keyframe,
                               { duration: 1000, fill: "both" });
  } catch (e) {
    return { error: e.name + ":" + e.message};
  }

  var fromResult = getComputedStyle(target)[property];
  animation.currentTime = 500;
  var halfResult = getComputedStyle(target)[property];
  animation.currentTime = 1000;
  var toResult = getComputedStyle(target)[property];

  document.body.removeChild(target);
  return { from: fromResult, half: halfResult, to: toResult };
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

function toUI(testcase, result) {
  var resultsElement = document.getElementById("results");
  var resultElement =
    appendElement("div", ["result"], "", resultsElement);

  var originalProperty = testcase.property + ":" +
                         "[" + testcase.from + ", " + testcase.to + "]";
  appendElement("div", ["cell", "property"], originalProperty, resultElement);
  if (result.error) {
    var errorElement = appendElement("div", ["cell", "error"],
                                     result.error, resultElement);
    resultElement.classList.add("error");
  } else {
    var resultClass
    if (testcase.from == result.from && testcase.to == result.to) {
      resultClass = result.half != result.to ? "animated" : "discreted";
    } else {
      resultClass = "ignored";
    }
    resultElement.classList.add(resultClass);

    appendElement("div", ["cell", "value"], result.from, resultElement);
    appendElement("div", ["cell", "value"], result.half, resultElement);
    appendElement("div", ["cell", "value"], result.to, resultElement);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var resultsElement = document.getElementById("results");
  var resultElement =
    appendElement("div", ["result"], "", resultsElement);

  appendElement("div", ["cell", "property"], "CSS property", resultElement);
  appendElement("div", ["cell", "value"], "from", resultElement);
  appendElement("div", ["cell", "value"], "half", resultElement);
  appendElement("div", ["cell", "value"], "to", resultElement);

  TESTCASES.forEach(function(testcase) {
    var result = execute(testcase.property, testcase.from, testcase.to);
    toUI(testcase, result);
  });
});