function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}

function toggleInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function toggleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  let foundInvalid = false;
  inputElements.forEach((inputElement) => {
    if (!inputElement.validity.valid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options; // object destruction
  // same as const inputSelector = options.inputSelector;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(".modal__button");
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      toggleInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

const enableValidation = (options) => {
  const formElements = [...document.querySelectorAll(options.formSelector)]; //spread operator

  const submitButton = document.querySelector(".modal__button");
  submitButton.classList.add(".modal__button_disabled");

  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, options);
  });
};

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
});

// DIFFERENT CODE SOLUTION STARTING HERE

// defining the function to call all the forms (class is modal__form) in the doc

// ** if input is not valid // * grab validation message // * add error class // * display browser error message // * button is diabled
function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  // for this function we're only using this argument
  // disable the submit button, show ther browser error missage, style the input field
  // find the input element by ID, and search by appended "-error" for the span with the message.
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  ); //template literal
  inputElement.classList.add(inputErrorClass); // add the red to border of the input field
  errorMessageElement.textContent = inputElement.validationMessage; //add the browser native error message
  errorMessageElement.classList.add(errorClass); // make the message red
}
// ** if input is valid // * enable button // * reset error message
function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  // for this function we're only using this argument
  // THis just reverses what occurs in "showInputError"

  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  inputElement.validationMessage = "";
  errorMessageElement.classList.remove(errorClass);
}

function toggleInputError(formElement, inputElement, options) {
  // determining next action based on the true or false of the validity of the input
  if (!inputElement.validity.valid) {
    return showInputError(formElement, inputElement, options);
   } // else {another else replaced with return
    hideInputError(formElement, inputElement, options);
  }


function hasInvalidInput(inputList) {
    //every() method returns true or false if ALL are true or false
    // this will check the inputs with in a form to ensure they are both incorrect - using !
    return !inputList.every((inputElement) => inputElement.validity.valid)
}

// create 2 new functions for enable disable buttons

function disableButton(){
    submitButton.classList.add(inactiveButtonClass);
    return (submitButton.diabled = true);
}

function enableButton(){

    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}

function toggleButtonState(inputElements, submitButton, [inactiveButtonClass]) {
  /* This is replaced by the hasInvalidInput function
  
    let foundInvalid = false; // use let because the state of foundInvalid can change
  inputElements.forEach((inputElement) => {
    
    
    // loops through
    if (!inputElement.validity.valid) {
      // checks validity by browser standards
      foundInvalid = true;
    } */
  });

  // if (foundInvalid) { is replaced with hasValidinput function with inputElement argument
  if (hasInvalidInput(inputElements)) {
    // changes class and properties based on validity
    // use return to work around the else statement
    submitButton.classList.add(inactiveButtonClass);
    return (submitButton.diabled = true);
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;

  /* submitButton.classList.add(inactiveButtonClass);
    submitButton.diabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  } */
}

// create a new function that will be called in the enableValidation function
function setEventListeners(formElement, options) {
  // const inputSelector = options.inputSelector; - this is the same as..
  const { inputSelector } = options; //object destruction
  // look for the all inputs with in the form element - // ** look for all the inputs of the form
  const inputElements = [...formElement.querySelectorAll(inputSelector)]; //inputSelector can be used instead of options.selector
  // find the submit button
  const submitButton = formElement.querySelector(".modal__button");

  // loop through the input elements and listen for typing - // ** loop through the inputs and check if valid
  inputElements.forEach((inputElement) => {
    // Listen for the inputs and determine if they are valid or invalid
    inputElement.addEventListener("input", (evt) => {
      // .validity.valid return true/false for the property.
      toggleInputError(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton);
    });

    // inputErrorClass: "modal__input-name_error",
  });
}

function enableValidation(options) {
  // Array.from converts the nodeList object to an array object (more functionality)
  // const formElements = Array.from(document.querySelectorAll(".modal__form"))
  // options.formSelector is the argument that searches config for formSelector, aka modal__form
  const formElements = [...document.querySelectorAll("options.formSelector")]; // spread operator. Functions the same as Array.from()
  // looping through all the form elements (plural) queried. assigning them each individually to form Element (singular)
  formElements.forEach((formElement) => {
    // listening for the click on the submit button in the elements and preventing the page from refreshing
    formElements.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    // call the setEventListener function and pass arguments. formElement being he object we are addressing, options to pull the selectors and classes me need
    setEventListeners(formElement, options);
  });
}

// creating an object that allows classes to be reused in different formats, and easily updated
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input-name_error",
  errorClass: "modal__error_visible",
};
// calling function, passing config from above
enableValidation(config);
