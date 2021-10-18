class Button extends HTMLButtonElement {
  constructor() {
    super();
  }
}

customElements.define("thi-button", Button, { extends: "button" });
