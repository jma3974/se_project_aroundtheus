export default class UserInfo {
  constructor(nameSelector, professionSelector, profileImageSelector) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatarEl = document.querySelector(profileImageSelector);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }

  setUserInfo({ userData }) {
    
;    this._name.textContent = userData.name;
    this._profession.textContent = userData.about;
    this._userID = userData._id;
  }

  getAvatar() {
    return {
      src: this._avatarEl.src,
    };
  }

  setAvatar(avatar) {
    
    this._avatarEl.src = avatar;
  }
}
