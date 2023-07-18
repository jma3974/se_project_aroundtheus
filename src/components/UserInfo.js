export default class UserInfo {
  constructor(nameSelector, professionSelector) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatarEl = document.querySelector(".profile__image");
    
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }
  setUserInfo(name, profession) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }

getAvatar() {
  return {
    src: this._avatarEl
  }
}

  setAvatar(avatar) {
    this._avatarEl.src = avatar;
  }
}
