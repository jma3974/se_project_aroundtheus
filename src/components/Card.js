class Card {
  constructor(
    { item },
    ownerId,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLike
   // handleUnlike
  ) {
    this._title = item.name;
    this._link = item.link;
    this._cardOwnerId = item.owner._id;
    this._id = item._id;
    this._cardSelector = cardSelector;
    this._likes = item.likes;
    this._ownerId = ownerId;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
    
  }

  // compare personal ID to ID on card for delete
  // if this._ownerId =

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
    this._cardLikesEl = this._cardElement.querySelector(".card__button-count");
    this._cardLikesEl.textContent = this._getLikes();
    this._trashEl = this._cardElement.querySelector(".card__button-del");
    if (this._cardOwnerId !== this._ownerId) {
      this._trashEl.classList.add('card__button-del-inactive');
    }
    this._setEventListeners();

    return this._cardElement;
  }

  // add method for checking to see if the owner has liked the card based on the data from the api
  // 

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__button-del")
      .addEventListener("click", () => {
        this._handleDeleteClick(this, this.id);
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

    if (this._cardElement.querySelector('.card__button-like_active')) {
      this._handleLike(this._id);
    }  
    //else {
    //  this._handleUnlike(this._id);
    // }
  }

  handleRemoveCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getLikes() {
    return this._likes.length;
  }

  _getUserID() {
    return this._ownerId._id;
  }
}

export default Card;
