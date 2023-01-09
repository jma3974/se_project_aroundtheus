let destinationCard_01 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

let destinationCard_02 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};

let destinationCard_03 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};

let destinationCard_04 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};

let destinationCard_05 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

let destinationCard_06 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

const initialCards = [
  destinationCard_01,
  destinationCard_02,
  destinationCard_03,
  destinationCard_04,
  destinationCard_05,
  destinationCard_06,
];

const openEditButton = document.querySelector(".profile__button-edit");
console.log(openEditButton);
const closeEditButton = document.querySelector(".modal__close");
console.log(closeEditButton);
const editModal = document.querySelector(".modal");
console.log(editModal);

function openEdit() {
  editModal.classList.add("modal_opened");
}

function closeEdit() {
  editModal.classList.remove("modal_opened");
}

openEditButton.addEventListener("click", openEdit);
closeEditButton.addEventListener("click", closeEdit);
