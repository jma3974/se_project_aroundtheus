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


  updateUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    }).then(this._checkResponse);
  }

  updateUserAvatar()
  {
    fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: info.avatar,
        
      }),
    });
  }

  addDestinationCard() {

           fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name: cards.name,
            link: cards.link,
          }),
        }).then(this._checkResponse);


      }

    
  delDestinationCard(card){
    fetch(`${this._baseUrl}/cards/${card}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeCardLikes(card) {
    return fetch(`${this._baseUrl}/cards/${card}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addCardLikes(card) {
    return fetch(`${this._baseUrl}/cards/${card}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }
  
  
 
}
