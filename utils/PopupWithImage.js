import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this.modalImageName = this._modalElement.querySelector(
      ".modal__image-title"
    );
    this._modalImageLink = this._modalElement.querySelector(
      ".modal__image-display"
    );
  }

  openModal(_title, _link) {
    console.log("from popup with image");
    console.log(_title);
    console.log(_link);
    super.openModal();
    this._modalImageLink.src = _link;
    this._modalImageName.textContent = _title;
    this._modalImageName.alt = _title;
  }
}
