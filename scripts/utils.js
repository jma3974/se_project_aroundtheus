// REQUIREMENTS
// will contain the event handlers and the function that opens/closes modal windows.

const openDisplayImage = document.querySelector("#viewImage-modal");
const closeDisplayImage = document.querySelector("#viewImage-modal-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector(".modal__image-title");



export function openModal(modal) {
  modal.classList.add("modal__opened");
  document.addEventListener("keyup", handleEscUp);
  modal.addEventListener("mousedown", handleMouseDown);
}

export function closeModal(modal) {
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


// function openDisplayModal(openDisplayImage) {
//   openModal(openDisplayImage);
// }

// function closeDisplayModal(openDisplayImage) {
//   closeModal(openDisplayImage);
// }