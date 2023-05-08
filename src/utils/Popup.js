export default class Popup {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector);
    this._closeButton = this._modalElement.querySelector(".modal__close");
  }

  openModal() {
    
    this._modalElement.classList.add("modal_opened");
  }

  closeModal() {
    
    document.removeEventListener("keyup", this._handleEscUp);
    this._modalElement.removeEventListener("mousedown", this._handleMouseDown);
    this._modalElement.classList.remove("modal_opened");
  }

  _handleMouseDown(evt) {
    if (evt.target.classList.contains("modal_opened")) {
      this.closeModal(evt.target);
    }
  }

  
  _handleEscUp(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {
    //set closing modal events
    document.addEventListener("keyup", (evt) => {
      this._handleEscUp(evt);
    });
    this._modalElement.addEventListener("mousedown", (evt) =>
      this._handleMouseDown(evt)
    );
    this._closeButton.addEventListener("click", (evt) => {
      this.closeModal(evt);
    });
  }
}