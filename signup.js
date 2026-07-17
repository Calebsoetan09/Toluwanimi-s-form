console.log(document);

const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const dobInput = document.getElementById("dob-input");
const phoneNumberInput = document.getElementById("number-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const confirmInput = document.getElementById("confirm-input");
const submitButton = document.getElementById("submit-button");
const errorDisplay = document.querySelector(".error");
const successDisplay = document.querySelector(".success");

console.log(firstNameInput);
console.log(lastNameInput);
console.log(dobInput);
console.log(phoneNumberInput);
console.log(emailInput);
console.log(passwordInput);
console.log(confirmInput);
console.log(submitButton);
console.log(errorDisplay);
console.log(successDisplay);

submitButton.addEventListener("click", function(){
    const firstNameInputValue = firstNameInput.value;
    const lastNameInputValue = lastNameInput.value;
    const dobInputValue = dobInput.value;
    const phoneNumberInputValue = phoneNumberInput.value;
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;
    const confirmInputValue = confirmInput.value;

    const age = 2026 - dobInputValue;
    console.log(age);

    if(dobInputValue === ""){
        console.error("Date of Birth must be entered");
        
        errorDisplay.textContent = "Date of Birth must be entered";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);

        return;
    }

    if(emailInputValue === ""){
        console.error("Email must be entered");

        errorDisplay.textContent = "Email must be entered";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);

        return;
    }

    if(!emailInputValue.includes("@")){
        console.error("Email format is invalid");

        errorDisplay.textContent = "Email format is invalid";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);

        return;
    }

    if(passwordInputValue === ""){
        console.error("password must be entered");

        errorDisplay.textContent = "password must be entered";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);

        return;
    }

    if(passwordInputValue.length <8){
        console.error("password is not strong enough");

        errorDisplay.textContent = "password is not strong enough";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);
    }

    if(confirmInputValue !== passwordInputValue){
        console.error("Type in the exact password you created");

        errorDisplay.textContent = "Type in the exact password you created";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);
    }

    console.log("Sign up successful");

    successDisplay.textContent = "Sign up successful";
    successDisplay.style.display = "block"

    setTimeout(function(){
        successDisplay.style.display = "none";
    } ,3000)
})