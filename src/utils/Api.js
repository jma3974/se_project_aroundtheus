export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
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
}

// updateUserInfo()
// use PATCH method

// updateUserAvatar()
// use PATCH method

// addDestinationCard()
// use POST method

// delDestinationCard()
// use DLETE method

// add remove likes
// use PUT and DLETE methods




