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
// Edit form
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

// FUNCTIONS
//Edit modal

function openEditProfileModal() {
  profileEditModal.classList.add("modal__edit_opened");
  console.log("open edit profile modal");
}
function openEditModal() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  profileEditModal.classList.add("modal__edit_opened");
  console.log("open edit modal");
}
function closeEditModal() {
  profileEditModal.classList.remove("modal__edit_opened");
  console.log("close edit modal");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeEditModal();
  console.log("handle profile form submit");
}

// Add modal

function openAddModal() {
  cardAddModal.classList.add("modal__edit_opened");
  console.log("open add modal");
}
function closeAddModal() {
  cardAddModal.classList.remove("modal__edit_opened");
  console.log("close add modal");
}

// NEW CARD SUBMISSION FUNCTION

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
  console.log("open Display modal");

  openDisplayImage.classList.add("modal__edit_opened");
}

function closeDisplayModal() {
  openDisplayImage.classList.remove("modal__edit_opened");
  console.log("close display modal");
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

  deleteButton.addEventListener("click", function () {
    const cardRemove = document.querySelector(".card");
    cardRemove.remove();
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
  getCardElement({
    titleInput: title,
    imageInput: link,
  });
  console.log("add modal submit");
  closeAddModal();
  modalAddSave.reset();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
