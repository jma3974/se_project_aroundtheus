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

// ELEMENTS

/* -------------------------------------------------------------------------- */
/*                                   MODALS                                   */
/* -------------------------------------------------------------------------- */

const openEditButton = document.querySelector(".profile__button-edit");
const closeEditButton = document.querySelector(".modal__close");
const profileEditModal = document.querySelector("#modal-edit");

const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");

const profileFormElement = profileEditModal.querySelector(".modal__container");
const nameInput = profileFormElement.querySelector(".modal__input-name");
const professionInput = profileFormElement.querySelector(
  ".modal__input-profession"
);
const modalSave = document.querySelector("#profile-edit-form");

// Add form

const openAddButton = document.querySelector(".profile__button-add");
const cardAddModal = document.querySelector("#modal-add");

const titleInput = cardAddModal.querySelector(".modal__input-title");
const imageInput = cardAddModal.querySelector(".modal__input-image");

const closeAddButton = document.querySelector("#modal__card");

const modalAddSave = document.querySelector("#profile-add-form");

// populate cards
const cardListEl = document.querySelector(".destinations");
const cardTemplate = document.querySelector("#card-template").content;


/* -------------------------------------------------------------------------- */
/*                                EDIT PROFILE                                */
/* -------------------------------------------------------------------------- */

function openEditProfileModal() {
  profileEditModal.classList.add("modal__edit_opened");
  
}
function openEditModal() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  profileEditModal.classList.add("modal__edit_opened");
  
}
function closeEditModal() {
  profileEditModal.classList.remove("modal__edit_opened");
  
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeEditModal();
  
}

/* -------------------------------------------------------------------------- */
/*                                  NEW CARD                                  */
/* -------------------------------------------------------------------------- */

function openAddModal() {
  cardAddModal.classList.add("modal__edit_opened");
  
}
function closeAddModal() {
  cardAddModal.classList.remove("modal__edit_opened");
  
}



function handleDestinationFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = titleInput.value;
  profileProfession.textContent = imageInput.value;
  closeAddModal();
}

/* -------------------------------------------------------------------------- */
/*                              Display image                                 */
/* -------------------------------------------------------------------------- */

const openDisplayImage = document.querySelector("#modal-image-display");
const closeDisplayImage = document.querySelector("#modal__display-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector(".modal__image-title");

function openDisplayModal() {
  

  openDisplayImage.classList.add("modal__edit_opened");
}

function closeDisplayModal() {
  openDisplayImage.classList.remove("modal__edit_opened");
  
}

/* -------------------------------------------------------------------------- */
/*                              Get Card Element                              */
/* -------------------------------------------------------------------------- */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image-card");
  const cardImageDisplay = cardElement.querySelector("#image-display");
  const likeButton = cardElement.querySelector(".card__button-like");
  const deleteButton = cardElement.querySelector(".card__button-del");

  cardImageDisplay.addEventListener("click", () => {
    modalImage.src = cardData.link;
    modalTitle.textContent = cardData.title;
    openDisplayModal();
  });
  closeDisplayImage.addEventListener("click", closeDisplayModal);

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button-like_active");
  });

 

  cardImageEl.alt = cardData.altText;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.title;

  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                                  LISTENERS                                 */
/* -------------------------------------------------------------------------- */


openEditButton.addEventListener("click", openEditModal);
closeEditButton.addEventListener("click", closeEditModal);
modalSave.addEventListener("submit", handleProfileFormSubmit);

openAddButton.addEventListener("click", openAddModal);
closeAddButton.addEventListener("click", closeAddModal);

modalAddSave.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const addCard = getCardElement({
    title: title,
    link: link,
  });
  cardListEl.prepend(addCard);
  
  closeAddModal();
  modalAddSave.reset();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
