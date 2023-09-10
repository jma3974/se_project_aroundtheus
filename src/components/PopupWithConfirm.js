import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(modalSelector, deleteButtonSelector, handleFormSubmit) {
    super(modalSelector);
    this._popupForm = this._modalElement.querySelector(".modal__form");
    this._modalInputs = this._popupForm.querySelectorAll(".modal__input");
    this._deleteButtonSelector = deleteButtonSelector;
    this._handleFormSubmit = handleFormSubmit;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.closeModal();
  };

  _setEventListeners() {
    super._setEventListeners();
    
    this._popupForm.addEventListener("submit", this._handleSubmit);
  
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._popupForm.removeEventListener("submit", this._handleSubmit);
  }

  closeModal = () => {
    this._popupForm.reset();
    super.closeModal();
  };



}