export default class UserInfo {
  constructor(profileName, profileProfession) {
    this._name = profileName;
    this._profession = profileProfession;
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    };
  }
  setUserInfo({ name, profession }) {
    (this._name.textContent = name),
      (this._profession.textContent = profession);
  }
}

/*
function fillProfileForm() {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
  
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closeEditModal();
  }

  profileFormElement.addEventListener("submit", handleProfileFormSubmit);

}
*/
