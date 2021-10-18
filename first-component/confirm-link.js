class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", (event) => {
      if (!confirm("Do you reallyt want to leave?")) {
        event.preventDefault();
      }
    });
  }
}

customElements.define("thi-confirm-link", ConfirmLink, { extends: "a" });
