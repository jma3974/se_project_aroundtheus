
  
  const modalOverlay = document.querySelector(".modal");
  
  

  const previewImageModal = document.querySelector("#viewImage-modal");
  
  
 
  
  
  
  
  

  const profileForm = document.querySelector("#profile-edit-form");
  

  
  
  
  const titleInput = cardAddModal.querySelector(".modal__input-title");
  const imageInput = cardAddModal.querySelector(".modal__input-image");
  

  
  const cardForm = document.querySelector("#profile-add-form");
  
  
  
  const cardTemplate = document.querySelector("#card-template").content;
  

  

  

  
  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
  
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closeEditModal();
  }
  

  
  const openDisplayImage = document.querySelector("#viewImage-modal");
  const closeDisplayImage = document.querySelector("#viewImage-modal-close");
  const modalImage = document.querySelector("#modal-image");
  const modalTitle = document.querySelector(".modal__image-title");
  
  function openDisplayModal() {
    openModal(openDisplayImage);
  }
  
 

  
    profileForm.addEventListener("submit", handleProfileFormSubmit);
  
   
  
  

  

  
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
  
  );