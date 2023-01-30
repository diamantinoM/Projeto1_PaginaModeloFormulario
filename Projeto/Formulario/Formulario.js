const dateInput = document.getElementById("date");
const dateError = document.querySelector(".validation-error-message-date");
const passInput = document.getElementById("password");
const passError = document.querySelector(".validation-error-message-password");
const pass2Input = document.getElementById("password2");
const pass2Error = document.querySelector(".validation-error-message-password2");
const nameInput = document.getElementById("name");
const nameError = document.querySelector(".validation-error-message-name");
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".validation-error-message-email");
const phoneInput = document.getElementById("phone");
const phoneError = document.querySelector(".validation-error-message-phone");
const submitButton = document.getElementById("submeter");
const resetButton = document.getElementById("limpar");
const form = document.getElementById("form");
const success = document.getElementById("success");
const checkbox = document.querySelector("#terms");
const termsError = document.querySelector(".validation-error-message-terms");


//DATE VALIDATION
function validateDate(inputValue){

    var dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    var dateArray = inputValue.split("/");
    var day = parseInt(dateArray[0]);
    var month = parseInt(dateArray[1]);
    var year = parseInt(dateArray[2]);
    var date = new Date(year, month - 1, day);

    if (inputValue === "") {
        return true;
    }
    if (!inputValue.match(dateFormat)) {
        return false;
    }
    if(date.getDate() == day && date.getMonth() == month - 1 && date.getFullYear() == year){
        return true;
    }
    return false;
}

dateInput.addEventListener("input", function() {

    if (!validateDate(this.value)) {
        dateError.style.display = "block";
    } else {
        dateError.style.display = "none";
    }
});

//PASSWORD VALIDATION
function validatePassWord(inputValuePass) {
    var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&]).{6,10}$/;

    if (!inputValuePass.match(passFormat)) {
        return false;
    }
    return true;
}

passInput.addEventListener("input", function() {

    if (!validatePassWord(this.value)) {
        passError.style.display = "block";
    } else {
        passError.style.display = "none";
    }
});


//PASSWORD CONFIRMATION 
function validatePassWordConf(pass1, pass2) { // bool
    return pass1 === pass2;  
}

pass2Input.addEventListener("input", function() {

    if (!validatePassWordConf(passInput.value, this.value)) {
        pass2Error.style.display = "block";
    } else {
        pass2Error.style.display = "none";
    }
});

//NAME VALIDATION
function validateName(inputValueName) {
    var nameFormat = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;

    if (!inputValueName.match(nameFormat)) {
        return false;
    }
    return true;
}

nameInput.addEventListener("input", function() {

    if (!validateName(this.value)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
})

//EMAIL VALIDATION
function validateEmail(inputValueEmail) {

    var emailFormat = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})$/;

    if (!inputValueEmail.match(emailFormat)) {
        return false;
    }
    return true;
}

emailInput.addEventListener("input", function() {

    if (!validateEmail(this.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
});

//PHONE VALIDATION
function validatePhone(inputValuePhone) {
    var phoneFormat = /(^[0-9]{9}$)|(^\+[0-9]{12}$)/;

    if (inputValuePhone === "") {
        return true;
    }
    if (!inputValuePhone.match(phoneFormat)) {
        return false;
    }
    return true
}

phoneInput.addEventListener("input", function() {

    if (!validatePhone(this.value)) {
        phoneError.style.display = "block";
    } else {
        phoneError.style.display = "none";
    }
});

//BUTONS
resetButton.addEventListener("click", function() {
    form.reset();
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); //prevent the form from submitting

    if (nameInput.value !== "" && 
        emailInput.value !== "" && 
        passInput.value !== "" &&
        pass2Input.value !== "" && 
        validatePassWord(passInput.value) && 
        validatePassWordConf(passInput.value, pass2Input.value) && 
        terms.checked) {
        
        form.style.display = "none";
        success.style.display = "block";
        document.querySelector(".left").classList.toggle("Center");
    } else if (!terms.checked) {
        termsError.style.display = "block";
    }
});

terms.addEventListener("click", function() {
    if (terms.checked) {
      termsError.style.display = "none";
    }
  });