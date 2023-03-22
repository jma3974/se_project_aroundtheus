// IMPORT CLASS/MODULE
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";

import FormValidator from "./FormValidator.js";

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

/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

const cardListEl = document.querySelector(".destinations");
const profileEditModal = document.querySelector("#editProfile-modal");
const cardAddModal = document.querySelector("#newCard-modal");
const addCardForm = document.querySelector("#profile-add-form");
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

const openAddButton = document.querySelector(".profile__button-add");
const closeAddButton = document.querySelector("#newCard-modal-close");
openAddButton.addEventListener("click", openAddModal);
closeAddButton.addEventListener("click", closeAddModal);



const formValidationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};


/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

function openAddModal() {
  openModal(cardAddModal);

// function openAddModal() {
//   const submitButton = cardAddModal.querySelector(
//     formValidationConfig.submitButtonSelector
//   );

//   const inputElements = [
//     ...cardAddModal.querySelectorAll(formValidationConfig.inputSelector),
//   ];
//   toggleButtonState(inputElements, submitButton, formValidationConfig);
//   openModal(cardAddModal);
}

function closeAddModal() {
  closeModal(cardAddModal);
}

function openEditModal() {
  fillProfileForm();

  openModal(profileEditModal);
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
}

function closeEditModal() {
  closeModal(profileEditModal);
}

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */


addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
});

openEditButton.addEventListener("click", openEditModal);
closeEditButton.addEventListener("click", closeEditModal);


// I need functionality for a form to update the profile

// I need functionality for a form to get title and url for a new destination card


// REQUIREMENTS
// will contain the rest of the code

const addCardValidator = new FormValidator(formValidationConfig, addCardForm);

 addCardValidator.enableValidation();

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.getCardElement();
  cardListEl.prepend(cardElement);
  // cardListEl.prepend(card.getCardElement()); - alt code
});


