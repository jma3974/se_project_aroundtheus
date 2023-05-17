export default class Popup {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector);
    this._closeButton = this._modalElement.querySelector(".modal__close");
  }

  openModal() {
    this._modalElement.classList.add("modal_opened");
    this._setEventListeners();
  }

  closeModal() {
    console.log("close popup event happening");
    this._modalElement.classList.remove("modal_opened");
    this._removeEventListeners();
  }

  _setEventListeners() {
    //set closing modal events
    document.addEventListener("keyup", this._handleEscUp);
    this._modalElement.addEventListener("mousedown", this._handleMouseDown);
    this._closeButton.addEventListener("click", this.closeModal);
    console.log("set event close button");
  }

  _removeEventListeners() {
    document.removeEventListener("keyup", this._handleEscUp);
    this._modalElement.removeEventListener("mousedown", this._handleMouseDown);
    this._closeButton.removeEventListener("click", this.closeModal);
  }

  _handleMouseDown = (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      console.log("press clickout");
      this.closeModal(evt.target);
    }
  };

  _handleEscUp = (evt) => {
    if (evt.key === "Escape") {
      console.log("press escape");
      this.closeModal();
    }
  };
}
