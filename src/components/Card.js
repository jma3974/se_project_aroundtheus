class Card {
  constructor({ item }, cardSelector, handleImageClick) {
    this._title = item.title;
    this._link = item.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
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

    this._cardElement
      .querySelector(".card__image-display")
      .addEventListener("click", () =>
        this._handleImageClick(this._title, this._link)
      );
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
}

export default Card;
