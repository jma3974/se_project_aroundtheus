import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(modalSelector) {
    super(modalSelector);
    this.modalImageName = this._modalElement.querySelector(".modal__image-title");
    this._modalImageLink = this._modalElement.querySelector(".modal__image-display");


    
  }

  openModal({name, link}) {
    console.log("open with popup image");
    super.openModal();
    this._modalimageLink.src = link;
    this._modalImageName.textContent = name;
    this._modalImageName.alt = name;
    
  }
}
