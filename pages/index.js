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

// const modalImage = document.querySelector("#modal-image");
// const cardTemplate = document.querySelector("#card-template");
// const cardListEl = document.querySelector(".destinations");

const addCardForm = document.querySelector("#profile-add-form");
const editCardForm = document.querySelector("#profile-edit-form");

const profileElement = document.querySelector(".profile");

const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");

const openEditButton = document.querySelector(".profile__button-edit");
const professionInput = document.querySelector(".modal__input-profession");
const nameInput = document.querySelector(".modal__input-name");
const titleInput = document.querySelector(".modal__input-title");
const imageInput = document.querySelector(".modal__input-image");
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

const userInfo = new UserInfo({
  name: profileName,
  profession: profileProfession,
});

const editProfileForm = new PopupWithForm("#editProfile-modal", () => {
  profileName.textContent = nameInput.value;

  profileProfession.textContent = professionInput.value;
  // listens for the submit
  // validates new inputs
  // adds new inputs to name and profession fields
});

editProfileForm.setEventListeners();

openEditButton.addEventListener("click", () => {
  editProfileForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                                  NEW CARD                                  */
/* -------------------------------------------------------------------------- */

const newDestinationCardForm = new PopupWithForm("#newCard-modal", () => {


const destinationTitle = titleInput.value;
const destinationImage = imageInput.value;

destinationSection.renderItems();

console.log(destinationTitle);
console.log(destinationImage);
  // the function that handles the submit event
  // grab the inputs from the form
  // creates a new instance of the card
  // validates inputs
  // populates instance with inputs
  // prepends card to the section
  console.log("a new destination card is created");
});

newDestinationCardForm.setEventListeners();

openAddButton.addEventListener("click", () => {
  newDestinationCardForm.openModal();
});

/* -------------------------------------------------------------------------- */
/*                              CARD IMAGE POP UP                             */
/* -------------------------------------------------------------------------- */

const cardImageModal = new PopupWithImage("#viewImage-modal");
cardImageModal.setEventListeners();



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
    renderer: (item) => {
      const card = new Card(item, "#card-template", (card) => {
        cardImageModal.openModal(card._title, card._link);
      });
      const cardElement = card.getCardElement();

      return cardElement;
    },
  },destinations
);

defaultDestinationSection.renderItems();
