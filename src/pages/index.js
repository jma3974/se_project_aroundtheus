// IMPORT CLASS/MODULE
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Api from "../utils/Api.js";
import {
  myId,
  addCardForm,
  editCardForm,
  profileNameSelector,
  profileProfessionSelector,
  openEditButton,
  professionInput,
  nameInput,
  avatarInput,
  destinations,
  openAddButton,
  avatarForm,
  openAvatarButton,
  profileImage,
  profileImageSelector,
  deleteButtonSelector,
} from "../utils/Constants.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "../pages/index.css";
// import PopupWithAvatar from "../components/PopupwithAvatar.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

// Creates and instance of API to access methods from
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: myId,
    "Content-Type": "application/json",
  },
});

// Creates an instance to create an individual card
const renderCard = (item) => {
  const card = new Card(
    { item }, //card details
    myId, // my owner id
    "#card-template", // card selector
    (title, link) => { //handle click on image
      cardImageModal.openModal(title, link);
    },
    (card, cardId) => { // handle click on trash bin
      deleteCardConfirm.openModal(card, cardId);
    },
    (_id, isLiked) => { // handle clicking like/unlike
      api.updateCardLikes(item._id, isLiked)
    }
  );
  const cardElement = card.getCardElement();
  console.log(item._id);
  console.log(item.name);
  console.log(item.likes);
  
  
  return cardElement;
};

// API promise to load cards and profile information
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo({ userData });
    userInfo.setAvatar(userData.avatar);
    console.log(userData.avatar);
    
    const defaultDestinationSection = new Section(
      {
        items: cards,
        renderer: renderCard,
      },
      destinations
    );
    defaultDestinationSection.renderItems();
  })
  .catch(console.error);

// Creates a singular location for the various classes involved in validation
const formValidationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};

// Creates and instance of UserInfo and pulls the respective user data
const userInfo = new UserInfo(
  profileNameSelector,
  profileProfessionSelector,
  profileImageSelector
);

// Creates and instance of popupform to access methods for forms
const editProfileForm = new PopupWithForm("#editProfile-modal", (values) => {
  api.updateUserInfo(values).then((res) => {
    const result = {
      userData: { name: values.name, about: values.profession },
    };
    userInfo.setUserInfo(result);
  });
});

// Creates an instance for accessing methods for updating the avatar image
const editAvatarForm = new PopupWithForm("#editAvatar-modal", (values) => {
  api.updateUserAvatar(values).then((res) =>{
    const result = {
      avatar: values.avatar
      // userData: {avatar: values.avatar}
    };
    console.log(result);
    userInfo.setAvatar(values.avatar);
  } )
  
});
// Opens the form for Avatar
openAvatarButton.addEventListener("click", () => {
  editAvatarValidator.toggleButtonState();
  const avatarData = userInfo.getAvatar();
  avatarInput.value = avatarData.src;
  console.log(avatarData);
  editAvatarForm.openModal();
});

// Opens the form for name and profession
openEditButton.addEventListener("click", () => {
  editFormValidator.toggleButtonState();
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  professionInput.value = profileData.profession;
  console.log(nameInput.value);
  editProfileForm.openModal();
  console.log("edit modal open")
});


// For gaining access to methods within popup form
const newDestinationCardForm = new PopupWithForm(
  "#newCard-modal",
  (newCardInputs) => {
    console.log(newCardInputs);
    api.addDestinationCard(newCardInputs).then((res) => {
      console.log(newCardInputs);
      const card = renderCard(res);
      defaultDestinationSection.addItem(card);
    });
  }
);

// Opens the modal that adds destination cards
openAddButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newDestinationCardForm.openModal();
});

// Creates an instance of a delete confirmation
const deleteCardConfirm = new PopupWithConfirm(
  "#deleteCard-modal",
  (card, cardId) => {
    return api.delDestinationCard(cardId).then(() => {
      card.handleRemoveCard();
    });
  }
);

const cardImageModal = new PopupWithImage("#viewImage-modal");

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
const editFormValidator = new FormValidator(formValidationConfig, editCardForm);
const editAvatarValidator = new FormValidator(formValidationConfig, avatarForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
editAvatarValidator.enableValidation();
