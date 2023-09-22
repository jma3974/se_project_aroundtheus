export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() 
    : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  updateUserInfo(info) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.profession,
      }),
    }).then(this._checkResponse);
  }

  updateUserAvatar(info) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(info),
    }).then(this._checkResponse);
  }

  addDestinationCard(cards) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cards.title,
        link: cards.link,
      }),
    }).then(this._checkResponse);
  }

  delDestinationCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // removeCardLikes(card) {
  //   return fetch(`${this._baseUrl}/cards/${card}/likes`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then(this._checkResponse);
  // }

// https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

  updateCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: liked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
