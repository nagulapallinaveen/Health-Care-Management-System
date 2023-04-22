import config from "./config.js";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const retypePassword = document.getElementById("retype-password");

const firstNameLabel = document.querySelector('label[for="first-name"]');
const lastNameLabel = document.querySelector('label[for="last-name"]');
const ageLabel = document.querySelector('label[for="age"]');
const addressLabel = document.querySelector('label[for="address"]');
const genderLabel = document.querySelector('label[for="gender"]');
const emailLabel = document.querySelector('label[for="email"]');
const phoneNumberLabel = document.querySelector('label[for="phone-number"]');
const passwordLabel = document.querySelector('label[for="password"]');
const retypePasswordLabel = document.querySelector('label[for="retype-password"]');

firstName.addEventListener("focusout", function () {
    validateField(firstName, firstNameLabel, 'fname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "fname-container");
});

lastName.addEventListener("focusout", function () {
    validateField(lastName, lastNameLabel, 'lname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "lname-container");
});

age.addEventListener("focusout", function () {
    validateField(age, ageLabel, 'age-error-message', /^[0-9]{1,3}$/, "age-container");
});

address.addEventListener("focusout", function () {
    validateField(address, addressLabel, 'address-error-message', /^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[a-zA-Z0-9\s.\-\,\#\:]*$/, "address-container");
});

gender.addEventListener("focusout", function () {
    validateField(gender, genderLabel, 'gender-error-message', null, "gender-container");
});

email.addEventListener("focusout", function () {
    validateField(email, emailLabel, 'email-error-message', /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/, "email-container");
});

phoneNumber.addEventListener("focusout", function () {
    maskPhoneNumber();
    validatePhoneNumber(phoneNumber, phoneNumberLabel, "phone-container");
});

password.addEventListener("focusout", function () {
    validateField(password, passwordLabel, 'password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "password-container");
});

retypePassword.addEventListener("focusout", function () {
    validateField(retypePassword, retypePasswordLabel, 're-password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "confirm-password-container");
});

firstName.addEventListener("input", function () {
    validateField(firstName, firstNameLabel, 'fname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "fname-container");
});

lastName.addEventListener("input", function () {
    validateField(lastName, lastNameLabel, 'lname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "lname-container");
});

age.addEventListener("input", function () {
    validateField(age, ageLabel, 'age-error-message', /^[0-9]{1,3}$/, "age-container");
});

address.addEventListener("input", function () {
    validateField(address, addressLabel, 'address-error-message', /^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[a-zA-Z0-9\s.\-\,\#\:]*$/, "address-container");
});

gender.addEventListener("input", function () {
    validateField(gender, genderLabel, 'gender-error-message', null, "gender-container");
});

email.addEventListener("input", function () {
    validateField(email, emailLabel, 'email-error-message', /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/, "email-container");
});

phoneNumber.addEventListener("input", function () {
    maskPhoneNumber();
    validatePhoneNumber(phoneNumber, phoneNumberLabel, "phone-container");
});

password.addEventListener("input", function () {
    validateField(password, passwordLabel, 'password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "password-container");
});

retypePassword.addEventListener("input", function () {
    validateField(retypePassword, retypePasswordLabel, 're-password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "confirm-password-container");
});

function validateField(inputField, inputFieldLabel, errorMessageClass, pattern, barErrorCOntainer, required = true) {
    const fieldValue = inputField.value.trim();
    const errorMessage = document.querySelector('.' + errorMessageClass);
    var container = document.getElementById(barErrorCOntainer);
    if (required && fieldValue === "") {
        errorMessage.innerText = "This field is required.";
        container.classList.add("error");
        return false;
    }
    if (pattern && !pattern.test(fieldValue)) {
        errorMessage.innerText = "Invalid input format.";
        inputFieldLabel.style.webkitTransform = 'translate(-12%, -65%) scale(0.75)';
        inputFieldLabel.style.transform = 'translate(-12%, -65%) scale(0.75)';
        inputFieldLabel.style.color = '#b5c3d8';
        container.classList.add("error");
        return false;
    }
    container.classList.remove("error");
    errorMessage.innerText = "";
    return true;
}

function maskPhoneNumber() {
    $("#phone-number").inputmask("(999) 999-9999");
}

function validatePhoneNumber(inputField, inputFieldLabel, barErrorCOntainer) {
    let phoneNumber = inputField.value;
    var container = document.getElementById(barErrorCOntainer);
    const errorMessage = document.querySelector('.phone-error-message');
    let phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (phoneRegex.test(phoneNumber)) {
        errorMessage.innerText = "";
        container.classList.remove("error");
        return true;
    } else {
        errorMessage.innerText = "Invalid phone number format.";
        inputFieldLabel.style.webkitTransform = 'translate(-12%, -65%) scale(0.75)';
        inputFieldLabel.style.transform = 'translate(-12%, -65%) scale(0.75)';
        inputFieldLabel.style.color = '#b5c3d8';
        container.classList.add("error");
        return false;
    }
}

function submitForm(event) {
    event.preventDefault();

    // Validate the form values
    const firstNameValue = document.getElementById("first-name").value.trim();
    const lastNameValue = document.getElementById("last-name").value.trim();
    const ageValue = document.getElementById("age").value.trim();
    const addressValue = document.getElementById("address").value.trim();
    const genderValue = document.getElementById("gender").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const phoneNumberValue = document.getElementById("phone-number").value.trim();
    const passwordValue = document.getElementById("password").value.trim();
    const confirmPasswordValue = document.getElementById("retype-password").value.trim();

    let isValid = 0;

    if (!firstNameValue) {
        if (validateField(firstName, firstNameLabel, 'fname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "fname-container")) {
            isValid++;
        }
    }

    if (!lastNameValue) {
        if (validateField(lastName, lastNameLabel, 'lname-error-message', /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/, "lname-container")) { // atleast three characters in address
            isValid++;
        }
    }

    if (!ageValue || isNaN(ageValue)) {
        if (validateField(age, ageLabel, 'age-error-message', /^[0-9]{1,3}$/, "age-container")) {
            isValid++;
        };
    }

    if (!addressValue) {
        if (validateField(address, addressLabel, 'address-error-message', /^[a-zA-Z0-9]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[\s]*[a-zA-Z0-9.\-\,\#\:]+[a-zA-Z0-9\s.\-\,\#\:]*$/, "address-container")) {
            isValid++;
        }
    }

    if (!genderValue) {
        if (validateField(gender, genderLabel, 'gender-error-message', null, "gender-container")) {
            isValid++;
        }
    }

    if (!emailValue) {
        if (validateField(email, emailLabel, 'email-error-message', /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/, "email-container")) {
            isValid++;
        }
    }

    if (!phoneNumberValue) {
        maskPhoneNumber();
        if (validatePhoneNumber(phoneNumber, phoneNumberLabel, "phone-container")) {
            isValid++;
        }
    }

    if (!passwordValue || passwordValue.length < 8) {
        if (validateField(password, passwordLabel, 'password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "password-container")) {
            isValid++;
        }
    }

    if (!confirmPasswordValue || confirmPasswordValue.length < 8) {
        if (validateField(password, passwordLabel, 're-password-error-message', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "confirm-password-container")) {
            isValid++;
        }
    }

    const errorMessage = document.querySelector('.same-password-error-message');
    if ((passwordValue !== confirmPasswordValue)) {
        errorMessage.innerText = "The passwords entered do not match. Please ensure that both passwords are identical.";
        isValid++;
    } else {
        errorMessage.innerText = "";
    }

    // Submit the form if it is valid
    if (isValid == 0) {
        console.log('First Name:', firstNameValue);
        console.log('Last Name:', lastNameValue);
        console.log('Age:', ageValue);
        console.log('Address:', addressValue);
        console.log('Gender:', genderValue);
        console.log('Email:', emailValue);
        console.log('Phone Number:', phoneNumberValue);
        console.log('Password:', passwordValue);
        console.log('Retype Password:', confirmPasswordValue);
        resetForm();
        // document.querySelector("form").submit();
    }
}

function resetForm() {
    isValid = 0;
    // Validate the form values
    const formAttributes = ["first-name", "last-name", "age", "address", "gender", "email", "phone-number", "password", "retype-password"];
    for (let i = 0; i < formAttributes.length; i++) {
        document.getElementById(formAttributes[i]).value = "";
    }
}

document.querySelector("form").addEventListener("submit", submitForm);
