//import { openModal, closeModal } from "../utils/utils.js";
import Popup from "../utils/Popup.js";

class Card {
  constructor({ title, link }, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._modalimage = document.querySelector("#modal-image");
    this._modalImageTitle = document.querySelector(".modal__image-title");
  }
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

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__button-del")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    // this._cardImageEl.addEventListener("click", () => {
    //   this._handlePreviewImage();
    // });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  // _handlePreviewImage() {
  //   this._modalimage.src = this._link;
  //   this._modalImageTitle.textContent = this._title;
  //   this._modalimage.alt = this._title;

  //   openModal(document.querySelector("#viewImage-modal"));
  // }
}

export default Card;
