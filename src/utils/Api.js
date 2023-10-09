export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, { headers: this._headers });
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }


  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, { headers: this._headers })
    ;
  }

  updateUserInfo(info) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.profession,
      }),
    });
  }

  updateUserAvatar(info) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(info),
    });
  }

  addDestinationCard(cards) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cards.title,
        link: cards.link,
      }),
    });
  }

  delDestinationCard(cardId) {
    return this._request(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  updateCardLikes(cardId, isLiked) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    });
  }
}
