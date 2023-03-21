// REQUIREMENTS
// will contain the event handlers and the function that opens/closes modal windows.




function openDisplayModal(openDisplayImage) {
  openModal(openDisplayImage);
}

function closeDisplayModal(openDisplayImage) {
  closeModal(openDisplayImage);
}

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