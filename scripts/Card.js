import * as utils from "./utils.js";
// I need the title of the image
// I need the url of the image

class Card {
  constructor({ title, link }, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  // I need the template of the card

  getCardElement() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._title;

    this._cardImageEl = this._cardElement.querySelector(".card__image-card");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._title;

    this._setEventListeners();

    return this._cardElement;
  }

  // I need a function to open a view
  // I need locate the like button

  // I need a function to toggle the like button
  // I need a function that closes the view with an X
  // I need a function that closes the view with ESC
  // I need a function that closes the view by clicking out of the view
  // I need locate the  delete button
  // I need a function that deletes the card

  // I need to export this as a unit

  _setEventListeners() {
    // ".card__button-like"
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //".card__button-del"
    this._cardElement
      .querySelector(".card__button-del")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardElement
      .querySelector("#image-display")
      .addEventListener("click", () => {
        this._handlePreviewImage();
      });
  }
  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle(".card__button-like_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handlePreviewImage() {
    this._cardImageDisplay = this._cardElement.querySelector("#image-display");
    document.querySelector("#modal-image").src = this._link;
    document.querySelector(".modal__image-title").textContent = this._title;
    openModal(document.querySelector("#viewImage-modal"));
  }
}

export default Card;

// REQUIREMENTS
// It takes card data — text and a link to the image — and a template element selector as parameters into the constructor.
// It has private methods for working with markup and adding event listeners.
// It has private methods for each event handler.
// It has one public method that returns a fully functional card element populated with data.
