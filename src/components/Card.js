class Card {
  constructor(
    { cardDetails },
    myId,
    cardSelector,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._title = cardDetails.name;
    this._link = cardDetails.link;
    this._cardOwnerId = cardDetails.owner._id;
    this._id = cardDetails._id;
    this._cardSelector = cardSelector;
    this._likes = cardDetails.likes;
    this._likesCount = this._likes.length;
    this._myId = myId;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleApiLike = handleLikeClick;
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._title;
    this._cardLike = this._cardElement.querySelector(".card__button-like");
    this._cardImageEl = this._cardElement.querySelector(".card__image-card");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._title;
    this._cardLikesEl = this._cardElement.querySelector(".card__button-count");
    this._cardLikesEl.textContent = this._getLikes();
    this._trashEl = this._cardElement.querySelector(".card__button-del");
  }

  getCardElement() {
    if (this._cardOwnerId !== this._myId) {
      this._trashEl.classList.add("card__button-del-inactive");
    }

    this.renderLikes();

    this._setEventListeners();

    return this._cardElement;
  }

  _setEventListeners() {
    // handle a click on the like button
    this._cardLike.addEventListener("click", () => {
      this._handleLike(); // Line 76
    });

    // handle a click on the trashcan
    this._trashEl.addEventListener("click", () => {
      this._handleDeleteClick(this, this._id);
    });

    this._cardElement // handle clicking for a large image
      .querySelector(".card__image-display")
      .addEventListener("click", () =>
        this._handleImageClick(this._title, this._link)
      );
  }

  _handleLike() {
    if (this.isLiked()) {
      this._handleApiLike(this._id, false)
        .then((card) => {
          this.updateLikes(card.likes);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      this._handleApiLike(this._id, true)
        .then((card) => {
          this.updateLikes(card.likes);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  updateLikes(likes) {
    this._likes = likes;
    this.renderLikes();
  }

  _getLikes() {
    return this._likes.length;
  }

  renderLikes() {
    if (this.isLiked()) {
      this._cardLike.classList.add("card__button-like_active");
    } else {
      this._cardLike.classList.remove("card__button-like_active");
    }
    this._cardLikesEl.textContent = this._likes.length;
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._myId);
  }

  handleRemoveCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getUserID() {
    return this._ownerId._id;
  }
}

export default Card;
