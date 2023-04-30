import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this._popupForm = this._modalElement.querySelector(".modal__form");
  }

  openModal() {
    console.log("open with popup image");
    super.openModal();
    this._modalimage.src = this._link;
    this._modalImageTitle.textContent = this._title;
    this._modalimage.alt = this._title;
    openModal(document.querySelector("#viewImage-modal"));
  }
}
