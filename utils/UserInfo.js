export default class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
  }
  getUserInfo() {
    return {
      name: this._name,
      profession: this._profession,
    };
    console.log("Get User Info");
  }
  setUserInfo(name, profession) {
    this._name.textContent = name.value;
    this._profession.textContent = profession.value;
  }
}
