var RIGHT_ARROW = "⇒";

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

function getAnimatedType(state0, state50, state100) {
  return state0 != state50
         ? state50 != state100
         ? "animated"
         : "discrete"
         : state50 != state100
         ? "discrete"
         : "ignored";
}
