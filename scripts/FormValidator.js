card FormValidator {
    construtor (config, formElement){
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    
        this._element = formElement;

    }

// I need to vlaidate the profile form fields are accurate

//I need to validate the destination card form fields are accurate


_setEventListeners(){


}

















}


// REQUIREMENTS
// Its constructor has two parameters. The first parameter is a settings object that stores selectors and form classes, and the second one takes a form element to be validated.
// It has private methods for processing the form, which include: checking the field's validity, changing the state of the Submit button, and adding all the needed handlers.
// It has a public method enableValidation(), which enables form validation.
// It has a public method to either disable the state of the button or reset form validation (including the state of the submit button).
// Create an instance of the FormValidator class for each form that should be validated.