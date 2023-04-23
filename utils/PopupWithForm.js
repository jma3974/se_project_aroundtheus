import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");

    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    // is this where UserInfo.js comes into play?
  }

  setEventListeners() {
    //add submit event handler
    // add click event listener to close icon
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
