document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("append-json").addEventListener("click", findJSON);
});

function findJSON(e) {
  var fileElement = document.createElement("input");
  fileElement.style.display = "none";
  fileElement.type = "file";
  fileElement.multiple = true;
  fileElement.accept = "application/json";
  document.body.appendChild(fileElement);
  fileElement.addEventListener("change", readJSON);
  fileElement.click();
  e.preventDefault();
  document.body.removeChild(fileElement);
}

function readJSON() {
  var files = this.files;
  for (var i = 0, n = files.length; i < n; i++) {
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      appendJSON(JSON.parse(reader.result));
    };
    reader.readAsText(file);
  }
}

function appendJSON(json) {
  var browserInformation = json.browserName + "/" + json.browserVersion;
  Object.keys(json.results).forEach(function(key) {
    updateUI(browserInformation, key, json.results[key]);
  });
}

function updateUI(browserInformation, propertyName, result) {
  var resultsElement = document.getElementById("results");

  var testcaseText = result.testcase[0] + "⇒" + result.testcase[1];
  var testcaseClass = "tc-" + testcaseText.replace(/\s|\(|\)|%|,|\./g, "");
  var resultElement =
        resultsElement.querySelector("." + propertyName + "." + testcaseClass);

  var isExistingTestcase = false;
  if (resultElement) {
    isExistingTestcase = true;
  } else {
    resultElement = appendElement("li", resultsElement, null,
                                  ["result", propertyName, testcaseClass]);
  }

  var dlElement = appendElement("dl", resultElement, null);
  if (!isExistingTestcase) {
    // Property column
    var specLink = CSSProperties[propertyName]["link"];
    var propertyElement = appendElement("dd", dlElement, null, ["property"]);
    appendElement("a", propertyElement, propertyName,
                  ["spec"], { "href": specLink });

    // Testcase column
    var testcaseElement = appendElement("dd", dlElement, null, ["testcase"]);
    var testdataElement = appendElement("div", testcaseElement, testcaseText);
    if (result["css-transition-datatype"]) {
      var animtypeLink =
        CSSDataTypes[result["css-transition-datatype"]]["animtype-link"];
      var divElement = appendElement("div", testcaseElement, null);
      appendElement("a", divElement, result["css-transition-datatype"],
                    ["css-transition-spec", "link"], { "href": animtypeLink });
    }
  } else {
    appendElement("dd", dlElement, null, ["property", "empty"]);
    appendElement("dd", dlElement, null, ["testcase", "empty"]);
  }

  // Browser columns
  var resultType =
    result.error
    ? "error"
    : result.result0 != result.result50
    ? result.result50 != result.result100
    ? "animated"
    : "discrete"
    : result.result50 != result.result100
    ? "discrete"
    : "ignored";
  appendElement("dd", dlElement, browserInformation, ["browser", resultType]);

  // Result columns
  if (result.error) {
    appendElement("dd", dlElement, result.error, ["error-result"]);
  } else {
    // 0% column
    appendElement("dd", dlElement, result.result0, ["result0"]);
    // 5% column
    appendElement("dd", dlElement, result.result50, ["result50"]);
    // 100% column
    appendElement("dd", dlElement, result.result100, ["result100"]);
    if (isExistingTestcase) {
      updateResultColumns(resultElement);
    }
  }
}

function updateResultColumns(resultElement) {
  updateResultColumn(resultElement.querySelectorAll(".result0"));
  updateResultColumn(resultElement.querySelectorAll(".result50"));
  updateResultColumn(resultElement.querySelectorAll(".result100"));
}

function updateResultColumn(elements) {
  var isEqaulValues = true;
  outloop: for (var i = 0, n = elements.length; i < n; i++) {
    var value1 = elements[i].textContent;
    for (var j = i; j < n; j++) {
      if (i == j) {
        continue;
      }
      if (value1 != elements[j].textContent) {
        isEqaulValues = false;
        break outloop;
      }
    }
  }
  var clazz = isEqaulValues ? "equal" : "different";
  for (var i = 0, n = elements.length; i < n; i++) {
    var element = elements[i];
    element.classList.remove("equal");
    element.classList.remove("different");
    element.classList.add(clazz);
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
  return element;
}
