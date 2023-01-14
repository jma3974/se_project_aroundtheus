// displaying the destination cards
let destinationCard_01 = {
  title: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  altText: "A view up a river through a forest to mountain cliffsides.",
};

let destinationCard_02 = {
  title: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  altText:
    "A view across an aqua colored lake to a pass between two jagged mountains.",
};

let destinationCard_03 = {
  title: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  altText: "A view over a low mountain range facing the setting sun.",
};

let destinationCard_04 = {
  title: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  altText: "A starry night view of three stone mountain peaks.",
};

let destinationCard_05 = {
  title: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  altText:
    "A view of a rock beach near a calm lake, reflecting the stony mountains in the distance.",
};

let destinationCard_06 = {
  title: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  altText:
    "A view of a series of row boats tied to a wharf on a lake surrounded by mountains.",
};

const initialCards = [
  destinationCard_01,
  destinationCard_02,
  destinationCard_03,
  destinationCard_04,
  destinationCard_05,
  destinationCard_06,
];

// ELEMENTS

const openEditButton = document.querySelector(".profile__button-edit");
const closeEditButton = document.querySelector(".modal__close");
const editModal = document.querySelector(".modal");

const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");

const profileFormElement = document.querySelector(".modal__container");
const nameInput = profileFormElement.querySelector(".modal__input-name");
const professionInput = profileFormElement.querySelector(
  ".modal__input-profession"
);
const modalSave = document.querySelector(".modal__button");
const cardListEl = document.querySelector(".destinations");
const cardTemplate = document.querySelector("#card-template").content;
console.log(cardTemplate);

// FUNCTIONS

function openEdit() {
  editModal.classList.add("modal_opened");
}

function closeEdit() {
  editModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;

  console.log(profileName);
  console.log(profileProfession);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.textContent = cardData.link;
  cardTitleEl.textContent = cardData.title;

  return cardElement;
}

// LISTENERS
openEditButton.addEventListener("click", openEdit);
closeEditButton.addEventListener("click", closeEdit);
modalSave.addEventListener("click", handleProfileFormSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
