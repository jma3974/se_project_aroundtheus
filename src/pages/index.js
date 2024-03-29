// IMPORT CLASS/MODULE
import Section from "../components/Section.js";
import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

// initial destination cards
const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    //altText: "A view up a river through a forest to mountain cliffsides.",
  },
  {
    title: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    //altText:
    //"A view across an aqua colored lake to a pass between two jagged mountains.",
  },

  {
    title: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    //altText: "A view over a low mountain range facing the setting sun.",
  },

  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    //altText: "A starry night view of three stone mountain peaks.",
  },

  {
    title: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    //altText:
    // "A view of a rock beach near a calm lake, reflecting the stony mountains in the distance.",
  },

  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    //altText:
    // "A view of a series of row boats tied to a wharf on a lake surrounded by mountains.",
  },
];

// const modalImage = document.querySelector("#modal-image");
const cardTemplate = document.querySelector("#card-template");
// const cardListEl = document.querySelector(".destinations");

const addCardForm = document.querySelector("#profile-add-form");
const editCardForm = document.querySelector("#profile-edit-form");

const profileElement = document.querySelector(".profile");

//const profileName = profileElement.querySelector(".profile__name");
const profileNameSelector = ".profile__name";
//const profileProfession = profileElement.querySelector(".profile__profession");
const profileProfessionSelector = ".profile__profession";

const openEditButton = document.querySelector(".profile__button-edit");
const professionInput = document.querySelector(".modal__input-profession");
const nameInput = document.querySelector(".modal__input-name");
//const titleInput = document.querySelector(".modal__input-title");
//const imageInput = document.querySelector(".modal__input-image");
//const cardListEl = document.querySelector(".destinations");
const destinations = ".destinations";

//const viewImageModal = document.querySelector("#viewImage-modal");

const openAddButton = document.querySelector(".profile__button-add");

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

const userInfo = new UserInfo(profileNameSelector, profileProfessionSelector);

const editProfileForm = new PopupWithForm("#editProfile-modal", (values) => {
  userInfo.setUserInfo(values.name, values.profession);
  
});

openEditButton.addEventListener("click", () => {
  editFormValidator.toggleButtonState();
  const profileData = userInfo.getUserInfo();

  nameInput.value = profileData.name;
  professionInput.value = profileData.profession;
  editProfileForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                                  NEW CARD                                  */
/* -------------------------------------------------------------------------- */

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

    //renderCard(newCardInputs);
    //const title = titleInput.value;
    //const link = imageInput.value;
    // const card = new Card({ title, link }, "#card-template");
    // const cardElement = card.getCardElement();
    // cardListEl.prepend(cardElement);
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

addFormValidator.enableValidation();
editFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                              INITIALIZE CARDS                              */
/* -------------------------------------------------------------------------- */

const defaultDestinationSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  destinations
);

defaultDestinationSection.renderItems();
