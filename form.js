var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var repeatPasswordInput = document.getElementById("repeatPasswordInput");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

function loginValidation() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    var flag = 0;
    if (regexp.test(inputEmail.value) == false) {
        inputEmail.style.border = "2px solid #DC3545";
        emailError.innerText = "Invalid Email";
        flag = 1;
    } else {
        if (emailError.innerText == "Invalid Email") {
            emailError.innerText = "";
            inputEmail.style.border = "";
        }
    }
    regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regexp.test(inputPassword.value) == false) {
        inputPassword.style.border = "2px solid #DC3545";
        passwordError.innerText = "Invalid Password";
        passwordError.style.color = "red";
        flag = 1;
    } else {
        if (passwordError.innerText == "Invalid Password") {
            passwordError.innerText = "";
            inputPassword.style.border = "";
        }
    }
    if (emailValidate() == false) {
        flag = 1;
    }
    if (repeatpasswordCheck() == false) {
        flag = 1;
    }
    if (phoneValidate() == false) {
        flag = 1
    }
    if (nameCheck(firstName) == false || nameCheck(lastName) == false) {
        flag = 1
    }
    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}
function passwordStrength() {
    var p = inputPassword.value;
    var errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one lowercase letter.");
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one uppercase letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one number.");
    }
    if (errors.length > 0) {
        passwordError.innerText = (errors.join("\n"));
        passwordError.style.fontSize = "12px";
        passwordError.removeAttribute("hidden", true);
        inputPassword.style.border = "2px solid #DC3545";
        return false;
    }
    else {
        passwordError.innerText = "";
        passwordError.setAttribute("hidden", true);
        inputPassword.style.border = "";
        // if (p.length >= 8 && p.length < 10) {
        //     inputPassword.style.border = "2px solid #DC3545";
        // }
        if (p.length >= 8 && p.length < 10) {
            inputPassword.style.border = "2px solid #FFC107";
        }
        else {
            inputPassword.style.border = "2px solid #28A745";
        }
    }

    return true;
}
function emailValidate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (regexp.test(inputEmail.value) == false) {
        inputEmail.style.border = "2px solid #DC3545";
        emailError.innerText = "Invalid Email";
        emailError.style.fontSize = "12px";
        emailError.removeAttribute("hidden", "true");
        return false;
    } else {
        if (emailError.innerText == "Invalid Email") {
            emailError.innerText = "";
            inputEmail.style.border = "2px solid #28A745";
            emailError.setAttribute("hidden", "true");
        }
    }
    return true;
}
function repeatpasswordCheck() {
    if (repeatPasswordInput.value != inputPassword.value) {
        repeatPasswordInput.style.border = "2px solid #DC3545";
        return false;
    }
    else {
        repeatPasswordInput.style.border = "";
    }
    return true;
}
function phoneValidate() {
    var phoneNumber = document.getElementById("phoneNumber");
    let regexp1 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    let regexp2 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
    let regexp3 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
    let regexp4 = /^([0-9]{10})$/;
    if (regexp1.test(phoneNumber.value) | regexp2.test(phoneNumber.value) | regexp3.test(phoneNumber.value) | regexp4.test(phoneNumber.value)) {
        phoneNumber.style.border = "2px solid #28A745";
    }
    else {
        phoneNumber.style.border = "2px solid #DC3545";
        return false;
    }
    return true;
}
function nameCheck(elem) {
    if (elem.value.length == 0) {
        elem.style.border = "2px solid #DC3545";
        return false
    }
    else {
        elem.style.border = "";
        return true
    }
}