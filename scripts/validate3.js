function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  inputElements.forEach(inputElement => {
    inputElement.addEventListener("input", () => {
        inputElement.validity.valid
    })
  })
  
  console.log(inputElements);
}


function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

setEventListeners(formElement, options);

  })};


const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
