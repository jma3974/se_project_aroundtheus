import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._popupForm = this._modalElement.querySelector(".modal__form");
    this._modalInputs = this._popupForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit happening");
    this._handleFormSubmit(this._getInputValues());
    this.closeModal;
  };

  _getInputValues() {
    const inputValues = {};

    this._modalInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  _setEventListeners() {
    super._setEventListeners();
    // set submit events
    console.log("set event listener submit");
    this._popupForm.addEventListener("submit", this._handleSubmit);
    // this._popupForm.addEventListener("submit", (evt) => {
    //   evt.preventDefault();
    //   this._handleFormSubmit(this._getInputValues());
    //   this.closeModal();
    // });
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._closeButton.removeEventListener("submit", this._handleSubmit());
  }

  closeModal = () => {
    console.log(this);
    this._popupForm.reset();
    super.closeModal();
  };
}
