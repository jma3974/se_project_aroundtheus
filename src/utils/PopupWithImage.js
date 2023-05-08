import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._modalImageTitle = this._modalElement.querySelector(
      ".modal__image-title"
    );
    this._modalImageLink = this._modalElement.querySelector(
      ".modal__image-display"
    );
  }

  openModal(_title, _link) {
    super.openModal();
    this._modalImageLink.src = _link;
    this._modalImageTitle.textContent = _title;
    this._modalImageTitle.alt = _title;
  }
}
