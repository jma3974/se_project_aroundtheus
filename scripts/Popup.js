export default class Popup {
  constructor({ modalSelector }) {
    this._popupElement = document.querySelector(modalSelector);
  }

  openModal() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", handleMouseDown);
  }

  close() {
    document.removeEventListener("keyup", handleEscUp);
    document.removeEventListener("keyup", handleEscUp);
    modal.removeEventListener("mousedown", handleMouseDown);
  }

  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      const activeModal = document.querySelector(".modal_opened");

      closeModal(activeModal);
    }
  }

  setEventListeners() {}
}
