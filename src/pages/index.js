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
import PopupWithAvatar from "../components/PopupwithAvatar.js";
import PopupWithConfirm from "../components/PopupwithConfirm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";

// Creates and instance of API to access methods from
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: myId,
    "Content-Type": "application/json",
  },
});

// API promise to load cards and profile information
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then (([userData, cards]) => {





})

api.getUserInfo().then((user) => {
  
  userInfo.setUserInfo(user.name, user.about);
  userInfo.setAvatar(user.avatar);
  //userId = user._id;
});


// Pulls and populates the list of cards currently in the database
api.getInitialCards().then((cards) => {
  const defaultDestinationSection = new Section(
    {
      items: cards,
      renderer: renderCard,
    },
    destinations
  );
  defaultDestinationSection.renderItems();
});



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
const userInfo = new UserInfo(profileNameSelector, profileProfessionSelector, profileImageSelector);



// Creates and instance of popupform to access methods for forms
const editProfileForm = new PopupWithForm("#editProfile-modal", (values) => {
  userInfo.setUserInfo(values.name, values.profession);
});

// Creates an instance for accessing methods for updating the avatar image
const editAvatarForm = new PopupWithForm("editAvatar-modal", (values) => {
  userInfo.setAvatar(values.avatar);
}

)
// Opens the form for Avatar
openAvatarButton.addEventListener("click", () => {
  editAvatarValidator.toggleButtonState();
  const avatarData = userInfo.getAvatar();
  editAvatarForm
  avatarInput.value = avatarData.avatar;
  console.log(avatarData.avatar);
  editAvatarForm.openModal();
})


// Opens the form for name and profession
openEditButton.addEventListener("click", () => {
  editFormValidator.toggleButtonState();
  const profileData = userInfo.getUserInfo();
  editProfileForm
  professionInput.value = profileData.profession;
  console.log(professionInput.value);
  console.log(nameInput)
  editProfileForm.openModal();
});





// Opens the form fo updating the avatar image
openAvatarButton.addEventListener("click", () => {
  editAvatarValidator.toggleButtonState();
  const avatarData = userInfo.getAvatar();
  avatarInput.value = avatarData.src;
    editAvatarForm.openModal();
});






// Creates an instance to create an indivudal card
const renderCard = (item) => {
  const card = new Card(
    { item }, "#card-template", (title, link) => {
    cardImageModal.openModal(title, link);
  });
  const cardElement = card.getCardElement();

  return cardElement;
};

// For gaining access to methods within popup form
const newDestinationCardForm = new PopupWithForm(
  "#newCard-modal",
  (newCardInputs) => {
    const card = renderCard(newCardInputs);
    defaultDestinationSection.addItem(card);
  }
);

// Opens the modal that adds destination cards
openAddButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newDestinationCardForm.openModal();
});


// Creates an instance of a delete confirmation
const deleteCardConfirm = new PopupWithConfirm(
  deleteButtonSelector
)

const cardImageModal = new PopupWithImage("#viewImage-modal");

const addFormValidator = new FormValidator(formValidationConfig, addCardForm);
const editFormValidator = new FormValidator(formValidationConfig, editCardForm);
const editAvatarValidator = new FormValidator(formValidationConfig, avatarForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();
editAvatarValidator.enableValidation();

