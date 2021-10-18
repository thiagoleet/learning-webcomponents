class InfoBox extends HTMLElement {
  constructor() {
    super();
    this._boxContainer;

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {}

  show() {
    this._showInfoBox();
  }

  hide() {
    this._hideInfoBox();
  }

  _showInfoBox() {
    this._boxContainer = document.createElement("p");
    this._boxContainer.innerHTML = `<slot></slot>`;
    this.shadowRoot.appendChild(this._boxContainer);
  }

  _hideInfoBox() {
    this.shadowRoot.removeChild(this._boxContainer);
  }
}

customElements.define("thi-info-box", InfoBox);
