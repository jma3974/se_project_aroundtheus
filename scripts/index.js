// IMPORT CLASS/MODULE
import Section from "./Section.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./USerInfo.js";

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

const cardListEl = document.querySelector(".destinations");
const profileEditModal = document.querySelector("#editProfile-modal");
const cardAddModal = document.querySelector("#newCard-modal");
const addCardForm = document.querySelector("#profile-add-form");
const editCardForm = document.querySelector("#profile-edit-form");
const profileFormElement = profileEditModal.querySelector(".modal__container");
const profileElement = document.querySelector(".profile");
const nameInput = profileFormElement.querySelector(".modal__input-name");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");
const professionInput = profileFormElement.querySelector(
  ".modal__input-profession"
);

const openEditButton = document.querySelector(".profile__button-edit");
const closeEditButton = profileEditModal.querySelector(".modal__close");
const closeModalImage = document.querySelector("#viewImage-modal-close");
const viewImageModal = document.querySelector("#viewImage-modal");

const openAddButton = document.querySelector(".profile__button-add");
const closeAddButton = document.querySelector("#newCard-modal-close");

const formValidationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};

/*
function fillProfileForm() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeEditModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
*/

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const card = new Card({ title, link }, "#card-template");
  const cardElement = card.getCardElement();
  cardListEl.prepend(cardElement);

  closeAddModal();
  addCardForm.reset();
  addFormValidator.toggleButtonState();
});

//NEW
addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

// OPEN MODALS
function openEditModal() {
  fillProfileForm();

  openModal(profileEditModal);
}
//NEW
function openAddModal() {
  openModal(cardAddModal);
}

openEditButton.addEventListener("click", openEditModal); //NEW
openAddButton.addEventListener("click", openAddModal);

//CLOSE MODAL
function closeEditModal() {
  closeModal(profileEditModal);
}

// NEW
function closeAddModal() {
  closeModal(cardAddModal);
}

function closeDisplayModal() {
  closeModal(viewImageModal);
}

closeEditButton.addEventListener("click", closeEditModal);
closeAddButton.addEventListener("click", closeAddModal);
closeModalImage.addEventListener("click", closeDisplayModal);

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
const editFormValidator = new FormValidator(formValidationConfig, editCardForm);
const getUserInfo = new UserInfo(profileName, profileProfession);

addFormValidator.enableValidation();
editFormValidator.enableValidation();

// initialCards.forEach((cardData) => {
//   const card = new Card(cardData, "#card-template");
//   const cardElement = card.getCardElement();
//   cardListEl.prepend(cardElement);
//   //cardListEl.prepend(card.getCardElement()); // - alt code
// });

/* -------------------------------------------------------------------------- */
/*                              INITIALIZE CARDS                              */
/* -------------------------------------------------------------------------- */

const destinationSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template");
      const cardElement = card.getCardElement();
      return cardElement;
    },
  },
  ".destinations"
);

destinationSection.renderItems();
