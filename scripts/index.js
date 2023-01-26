// displaying the destination cards
const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    altText: "A view up a river through a forest to mountain cliffsides.",
  },
  {
    title: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    altText:
      "A view across an aqua colored lake to a pass between two jagged mountains.",
  },

  {
    title: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    altText: "A view over a low mountain range facing the setting sun.",
  },

  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    altText: "A starry night view of three stone mountain peaks.",
  },

  {
    title: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    altText:
      "A view of a rock beach near a calm lake, reflecting the stony mountains in the distance.",
  },

  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    altText:
      "A view of a series of row boats tied to a wharf on a lake surrounded by mountains.",
  },
];

// ELEMENTS

/*
const openAddButton = document.querySelector(".profile__button-add");
const closeAddButton = document.querySelector(".modal__close");
const addEditModal = document.querySelector(".modal1");

*/

const openEditButton = document.querySelector(".profile__button-edit");
const closeEditButton = document.querySelector(".modal__close");
const profileEditModal = document.querySelector(".modal");

const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");

const profileFormElement = profileEditModal.querySelector(".modal__container");
const nameInput = profileFormElement.querySelector(".modal__input-name");
const professionInput = profileFormElement.querySelector(
  ".modal__input-profession"
);
const modalSave = document.querySelector("#profile-edit-form");
const cardListEl = document.querySelector(".destinations");
const cardTemplate = document.querySelector("#card-template").content;

// FUNCTIONS

function openEditProfileModal() {
  profileEditModal.classList.add("modal_opened");
}

function openModal() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  profileEditModal.classList.add("modal_opened");
}

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeModal();
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__button-like");
  // find delete button

  // event listener for when it is clicked
  //cardElement.remove();

  // add click listener to the cardImage element
  //openModal with preview ImageModal

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button-like_active");
  });

  cardImageEl.alt = cardData.altText;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.title;

  return cardElement;
}

// LISTENERS
openEditButton.addEventListener("click", openModal);
closeEditButton.addEventListener("click", closeModal);
openEditButton.addEventListener("click", openEditProfileModal);
modalSave.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
