export default class Popup {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector);
  }

  openModal() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", handleMouseDown);
    console.log("open with Popup");
  }

  closeModal() {
    document.removeEventListener("keyup", handleEscUp);
    document.removeEventListener("keyup", handleEscUp);
    modal.removeEventListener("mousedown", handleMouseDown);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {
    //  this._modalElement.addEventListener("click", openModal);
  }
}
