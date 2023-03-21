// IMPORT CLASS/MODULE
import Card from "./Card.js";

//import FormValidator from "./FormValidator.js";

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

const openDisplayImage = document.querySelector("#viewImage-modal");
const closeDisplayImage = document.querySelector("#viewImage-modal-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector(".modal__image-title");
const cardListEl = document.querySelector(".destinations");

initialCards.forEach((cardData) => {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.getCardElement();
  cardListEl.prepend(cardElement);
  // cardListEl.prepend(card.getCardElement()); - alt code
});

// I need to display the profile name and profession

// I need to display the initial cards with all their functionality

// I need functionality for a form to update the profile

// I need functionality for a form to get title and url for a new destination card

// I need FormValidator to active monitor the forms to validate

// REQUITEMENTS
// will contain the rest of the code
