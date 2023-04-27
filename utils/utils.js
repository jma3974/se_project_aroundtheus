/* -------------------------------------------------------------------------- */
/*                              BEING DEPRECATED                              */
/* -------------------------------------------------------------------------- */

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
  console.log("open modal utils");
  modal.addEventListener("mousedown", handleMouseDown);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
  modal.removeEventListener("mousedown", handleMouseDown);
}

function handleEscUp(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");

    closeModal(activeModal);
  }
}

function handleMouseDown(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closeModal(evt.target);
  }
}
