import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._popupForm = this._modalElement.querySelector(".modal__form");
    this._modalInputs = this._popupForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputValues = {};

    this._modalInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    console.log(inputValues);
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    // set submit events
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      console.log("submit from pop up with form");
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.closeModal();
    });
  }

  closeModal() {
    this._popupForm.reset();
    super.closeModal();
  }
}
