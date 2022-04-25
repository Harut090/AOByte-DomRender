function el(type, attrs, children) {
  let domElement;
  switch (type) {
    case "div":
      domElement = new DivElement(type, attrs, children);
      break;
    case "span":
      domElement = new SpanElement(type, attrs, children);
      break;
    case "ul":
      domElement = new UlElement(type, attrs, children);
      break;
    case "li":
      domElement = new LiElement(type, attrs, children);
      break;
    case "form":
      domElement = new FormElement(type, attrs, children);
      break;
    case "br":
      domElement = new BrElement(type, attrs, children);
      break;
    case "input":
      domElement = new InputElement(type, attrs, children);
      break;
    case "label":
      domElement = new LabelElement(type, attrs, children);
      break;
    default:
      throw new Error("Uncknown element type: " + type);
  }

  return domElement;
}

class DomElement {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs;
    this.children = children;
  }

  setChildren(element) {
    const children = Array.isArray(this.children)
      ? this.children
      : [this.children];
    for (let child of children) {
      if (child instanceof DomElement) {
        element.appendChild(child.draw());
      } else {
        element.textContent = child;
      }
    }

    return element;
  }

  setAttributes(element) {
    for (let key in this.attrs) {
      element.setAttribute(key, this.attrs[key]);
    }

    return element;
  }
}

class DivElement extends DomElement {
  draw(children) {
    const element = document.createElement("DIV");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}
class SpanElement extends DomElement {
  draw(children) {
    const element = document.createElement("SPAN");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}
class UlElement extends DomElement {
  draw(children) {
    const element = document.createElement("UL");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}
class LiElement extends DomElement {
  draw(children) {
    const element = document.createElement("LI");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}
class FormElement extends DomElement {
  draw(children) {
    const element = document.createElement("FORM");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}
class BrElement extends DomElement {
  draw(children) {
    const element = document.createElement("BR");
    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}

class InputElement extends DomElement {
  draw(children) {
    const element = document.createElement("INPUT");

    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}

class LabelElement extends DomElement {
  draw(children) {
    const element = document.createElement("LABEL");

    this.setChildren(element);
    this.setAttributes(element);

    return element;
  }
}

const tree = el("form", { action: "/some_action" }, [
  el("label", { for: "name" }, "First name:"),
  el("br", {}, null),
  el(
    "input",
    { type: "text", id: "name", name: "name", value: "My name" },
    null
  ),
  el("br", {}, null),
  el("label", { for: "last_name" }, "Last name:"),
  el("br", {}, null),
  el(
    "input",
    {
      type: "text",
      id: "last_name",
      name: "last_name",
      value: "My second name",
    },
    null
  ),
  el("br", {}, null),
  el("input", { type: "submit", value: "Submit" }, null),
  el("ul", {}, [
    el("li", {}, "Item 1"),
    el("li", {}, "Item 2"),
    el("li", {}, "Item 3"),
  ]),
]);
document.getElementById("root").appendChild(tree.draw());
