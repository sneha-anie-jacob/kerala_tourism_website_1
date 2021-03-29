var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

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
        errors.push("Your password will be at least 8 characters");
    }
    if (p.search(/[a-z]/) < 0) {
        errors.push("Your password will contain at least one lowercase letter.");
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password will contain at least one uppercase letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password will contain at least one number.");
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
    } else {
        if (emailError.innerText == "Invalid Email") {
            emailError.innerText = "";
            inputEmail.style.border = "";
            emailError.setAttribute("hidden", "true");
        }
    }
}