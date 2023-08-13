// IMPORT CLASS/MODULE
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Api from "../utils/Api.js";
import {
  myId,
  addCardForm,
  editCardForm,
  profileNameSelector,
  profileProfessionSelector,
  openEditButton,
  professionInput,
  nameInput,
  avatarInput,
  destinations,
  openAddButton,
  avatarForm,
  openAvatarButton,
  profileImage,
  profileImageSelector,
} from "../utils/Constants.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";
import PopupWithAvatar from "../components/PopupwithAvatar.js";
import PopupWithDelete from "../components/PopupwithDelete.js";


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: myId,
    "Content-Type": "application/json",
  },
});

const formValidationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};

/* -------------------------------------------------------------------------- */
/*                                   PROFILE                                  */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo(profileNameSelector, profileProfessionSelector, profileImageSelector);
api.getUserInfo().then((user) => {
  
  userInfo.setUserInfo(user.name, user.about);
  userInfo.setAvatar(user.avatar);
  userId = user._id;
});

const editProfileForm = new PopupWithForm("#editProfile-modal", (values) => {
  userInfo.setUserInfo(values.name, values.profession);
});

openEditButton.addEventListener("click", () => {
  editFormValidator.toggleButtonState();
  const profileData = userInfo.getUserInfo();

  nameInput.value = profileData.name;
  professionInput.value = profileData.profession;
  console.log(professionInput.value);
  console.log(nameInput)
  editProfileForm.openModal();
});

const editAvatarForm = new PopupWithAvatar("#editAvatar-modal", (values) => {
  userInfo.setAvatar(values.src);
});



openAvatarButton.addEventListener("click", () => {
  editAvatarValidator.toggleButtonState();
  const avatarData = userInfo.getAvatar();
  avatarInput.value = avatarData.src;
    editAvatarForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                                  NEW CARD                                  */
/* -------------------------------------------------------------------------- */
api.getInitialCards().then((cards) => {
  console.log(cards);
  const defaultDestinationSection = new Section(
    {
      items: cards,
      renderer: renderCard,
    },
    destinations
  );
  defaultDestinationSection.renderItems();
});

const renderCard = (item) => {
  const card = new Card({ item }, "#card-template", (title, link) => {
    cardImageModal.openModal(title, link);
  });
  const cardElement = card.getCardElement();

  return cardElement;
};

const newDestinationCardForm = new PopupWithForm(
  "#newCard-modal",
  (newCardInputs) => {
    const card = renderCard(newCardInputs);
    defaultDestinationSection.addItem(card);
  }
);

openAddButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newDestinationCardForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                              CARD IMAGE POP UP                             */
/* -------------------------------------------------------------------------- */

const cardImageModal = new PopupWithImage("#viewImage-modal");

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
const editFormValidator = new FormValidator(formValidationConfig, editCardForm);
const editAvatarValidator = new FormValidator(formValidationConfig, avatarForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
editAvatarValidator.enableValidation();

