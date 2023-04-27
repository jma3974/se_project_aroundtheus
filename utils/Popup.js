export default class Popup {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector);
  }

  openModal() {
    console.log("open with Popup");
    this._modalElement.classList.add("modal_opened");
  }

  closeModal() {
    document.removeEventListener("keyup", handleEscUp);
    modal.removeEventListener("mousedown", handleMouseDown);
    this._modalElement.classList.remove("modal_opened");
  }

  _handleMouseDown(evt) {
    if (evt.target.classList.contains("modal_opened")) {
      closeModal(evt.target);
    }
  }

  // good
  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {
    document.addEventListener("keyup", () => this._handleEscUp());
    this._modalElement.addEventListener("mousedown", () =>
      this._handleMouseDown()
    );
  }
}
