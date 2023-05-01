// IMPORT CLASS/MODULE
import Section from "../utils/Section.js";
import Card from "../components/Card.js";
//import { openModal, closeModal } from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../utils/UserInfo.js";
import PopupWithForm from "../utils/PopupWithForm.js";
import PopupWithImage from "../utils/PopupWithImage.js";

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

const modalImage = document.querySelector("#modal-image")
const cardTemplate = document.querySelector("#card-template");
const cardListEl = document.querySelector(".destinations");
//const profileEditModal = document.querySelector("#editProfile-modal");
//const cardAddModal = document.querySelector("#newCard-modal");
const addCardForm = document.querySelector("#profile-add-form");
const editCardForm = document.querySelector("#profile-edit-form");
//const profileFormElement = profileEditModal.querySelector(".modal__container");
const profileElement = document.querySelector(".profile");
//const cardImage = document.querySelector("card__image-card");
//const nameInput = profileFormElement.querySelector(".modal__input-name");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");
// const professionInput = profileFormElement.querySelector(
//   ".modal__input-profession"
// );

const openEditButton = document.querySelector(".profile__button-edit");
//const closeEditButton = profileEditModal.querySelector(".modal__close");
//const closeModalImage = document.querySelector("#viewImage-modal-close");
const viewImageModal = document.querySelector("#viewImage-modal");

const openAddButton = document.querySelector(".profile__button-add");
const closeAddButton = document.querySelector("#newCard-modal-close");
//const closeModalButton = document.querySelector(".modal__close");

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

const editProfileForm = new PopupWithForm("#editProfile-modal", (inputs) => {
  userInfo.getUserInfo(inputs);
});

editProfileForm.setEventListeners();

openEditButton.addEventListener("click", () => {
  editProfileForm.openModal();
});

const userInfo = new UserInfo({
  name: profileName,
  profession: profileProfession,
});

//userInfo.setUserInfo()

/* -------------------------------------------------------------------------- */
/*                                  NEW CARD                                  */
/* -------------------------------------------------------------------------- */

//NEW
// function openAddModal() {
//   openModal(cardAddModal);
// }

const newDestinationCardForm = new PopupWithForm("#newCard-modal", () => {});

newDestinationCardForm.setEventListeners();

openAddButton.addEventListener("click", () => {
  newDestinationCardForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                              CARD IMAGE POP UP                             */
/* -------------------------------------------------------------------------- */

const cardImageModal = new PopupWithImage("#viewImage-modal");
cardImageModal.setEventListeners();
//cardImage.addEventListener("click", cardImageModal.openModal());

// SELECTOR.addEventListener("click", () => {
// funtion to open modal with target src
//})

// function fillProfileForm() {
//   nameInput.value = profileName.textContent;
//   professionInput.value = profileProfession.textContent;
// }

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
// console.log("old profile submit")
//   profileName.textContent = nameInput.value;
//   profileProfession.textContent = professionInput.value;
//   closeEditModal();
// }

// profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// This is the listener to add a new card to the list
addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const card = new Card({ title, link }, cardTemplate);
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

// function openEditModal() {
//   fillProfileForm();
//   console.log("old modal open");

//   openModal(profileEditModal);
// }

//openEditButton.addEventListener("click", openEditModal); //NEW

//CLOSE MODAL
// function closeEditModal() {
//   closeModal(profileEditModal);
// }

// // NEW
// function closeAddModal() {
//   closeModal(cardAddModal);
// }

// function closeDisplayModal() {
//   closeModal(viewImageModal);
// }

//closeEditButton.addEventListener("click", closeEditModal);
//closeAddButton.addEventListener("click", closeAddModal);
//closeModalImage.addEventListener("click", closeDisplayModal);

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
const editFormValidator = new FormValidator(formValidationConfig, editCardForm);

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
      const card = new Card(item, "#card-template", () => {
        
        modalImage.src = item.link;
        modalImage.textContent = item.name;
        modalImage.alt = item.name;
        viewImageModal.openModal(modalImage.src, modalImage.textContent);
        console.log("a card")
      });
      const cardElement = card.getCardElement();

      return cardElement;
    },
  },
  ".destinations"
);

destinationSection.renderItems();
