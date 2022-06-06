let passwordInputs = document.querySelectorAll(".password");
const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_';

let sliderValue = document.querySelector(".slider-value");
let sliderValText = document.querySelector(".slider-text");

function updateSlider(value) {
    sliderValText.textContent = sliderValue.value;
}

function generatePasswordText() {
    let passwordLength = sliderValue.value;
    // let passwordLength = 16;
    let password = '';
    while (passwordLength > 0) {
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
        passwordLength -= 1;
    }
    return password;
}

function generatePasswords() {
    for (let i=0; i<passwordInputs.length; i++) {
        passwordInputs[i].setAttribute("value", generatePasswordText());
    }
}

for (let i=0; i<passwordInputs.length; i++) {
    passwordInputs[i].addEventListener('click', function() {
        const newPass = this;
        console.log(newPass);
        newPass.select();
        navigator.clipboard.writeText(newPass.value);
        alert("Copied the text: " + newPass.value);

    })
}