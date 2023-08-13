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

  initializePage(){
return Promise.all([this.getUserInfo(), this.getInitialCards])
.then(([userInfo, initialCards]) => {
  return {userInfo, initialCards};
}
);
  }

  updateUserInfo() {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Physicist and Chemist",
      }),
    });
  }

  updateUserAvatar()
  {
    fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: "Marie Skłodowska Curie",
        
      }),
    });
  }

  addDestinationCard() {

           fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: {
            authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            avatar: "Marie Skłodowska Curie",
            
          }),
        });






      }

    
  delDestinationCard(){

  }
  // use DLETE method

  // add remove likes
  // use PUT and DLETE methods
}
