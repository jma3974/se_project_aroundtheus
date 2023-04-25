import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._popupForm = this._modalElement.querySelector(".modal__form");
  }

  openModal() {
    this._modalElement.classList.add("modal_opened");

    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", handleMouseDown);
  }
}
