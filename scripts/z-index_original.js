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

const modalOverlay = document.querySelector(".modal");
const profileEditModal = document.querySelector("#editProfile-modal");
const cardAddModal = document.querySelector("#newCard-modal");
// const professionEditModal = document.querySelector("#newCard-modal");
const previewImageModal = document.querySelector("#viewImage-modal");
const openEditButton = document.querySelector(".profile__button-edit");
const closeEditButton = profileEditModal.querySelector(".modal__close");

const profileElement = document.querySelector(".profile");
const profileName = profileElement.querySelector(".profile__name");
const profileProfession = profileElement.querySelector(".profile__profession");

const profileFormElement = profileEditModal.querySelector(".modal__container");
const nameInput = profileFormElement.querySelector(".modal__input-name");
const professionInput = profileFormElement.querySelector(
  ".modal__input-profession"
);
const profileForm = document.querySelector("#profile-edit-form");

// New card form

const openAddButton = document.querySelector(".profile__button-add");

const titleInput = cardAddModal.querySelector(".modal__input-title");
const imageInput = cardAddModal.querySelector(".modal__input-image");

const closeAddButton = document.querySelector("#newCard-modal-close");

const cardForm = document.querySelector("#profile-add-form");

// populate cards
const cardListEl = document.querySelector(".destinations");
const cardTemplate = document.querySelector("#card-template").content;

/* -------------------------------------------------------------------------- */
/*                                EDIT PROFILE                                */
/* -------------------------------------------------------------------------- */

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
}

function openEditModal() {
  fillProfileForm();

  openModal(profileEditModal);
}

function closeEditModal() {
  closeModal(profileEditModal);
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
  const submitButton = cardAddModal.querySelector(validationClasses.submitButtonSelector);

  const inputElements = [
    ...cardAddModal.querySelectorAll(validationClasses.inputSelector),
  ];
  toggleButtonState(inputElements, submitButton, validationClasses);
  openModal(cardAddModal);
}
function closeAddModal() {
  closeModal(cardAddModal);
}

/* -------------------------------------------------------------------------- */
/*                              Display image                                 */
/* -------------------------------------------------------------------------- */

const openDisplayImage = document.querySelector("#viewImage-modal");
const closeDisplayImage = document.querySelector("#viewImage-modal-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector(".modal__image-title");

function openDisplayModal() {
  openModal(openDisplayImage);
}

function closeDisplayModal() {
  closeModal(openDisplayImage);
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

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__button-like_active");
  });

  deleteButton.addEventListener("click", function () {
    const cardRemove = deleteButton.closest(".card");
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
profileForm.addEventListener("submit", handleProfileFormSubmit);

openAddButton.addEventListener("click", openAddModal);
closeAddButton.addEventListener("click", closeAddModal);

closeDisplayImage.addEventListener("click", closeDisplayModal);

function openModal(modal) {
  modal.classList.add("modal__opened");
  document.addEventListener("keyup", handleEscUp);
  modal.addEventListener("mousedown", handleMouseDown);
}

function closeModal(modal) {
  modal.classList.remove("modal__opened");
  document.removeEventListener("keyup", handleEscUp);
  modal.removeEventListener("mousedown", handleMouseDown);
}

function handleEscUp(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal__opened");

    closeModal(activeModal);
  }
}

function handleMouseDown(evt) {
  if (evt.target.classList.contains("modal__opened")) {
    closeModal(evt.target);
  }
}

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  const cardElement = getCardElement({
    title: title,
    link: link,
  });
  cardListEl.prepend(cardElement);

  closeAddModal();
  cardForm.reset();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
