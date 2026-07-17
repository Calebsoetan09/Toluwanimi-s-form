console.log("Document Object Model")

console.log(document);

const emailuserInput = document.getElementById("user-email-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const errorDisplay = document.querySelector(".error");
const successDisplay = document.querySelector(".success");

console.log(emailuserInput);
console.log(passwordInput);
console.log(submitButton);
console.log(errorDisplay);
console.log(successDisplay);

submitButton.addEventListener("click" , function(){
    const emailuserInputValue = emailuserInput.value;
    const passwordInputValue = passwordInput.value;

    if(emailuserInputValue === ""){
        console.error("read the instruction again , dumbass:)");
        errorDisplay.textContent = "read the instruction again , dumbass:)";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        } ,3000);

        return;
    }

    if(passwordInputValue === ""){
        console.error("learn from the last mistake , dumbass:)");
        errorDisplay.textContent = "learn from the last mistake , dumbass:)"
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 3000);

        return;
    }

    if(passwordInputValue.length <8 ){
        console.error("come on , you were taught about this in school , fool");
        errorDisplay.textContent = "come on , you were taught about this in school , fool";
        errorDisplay.style.display = "block";

        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 3000);

        return;
    }


    console.log("login sucessful");
    successDisplay.textContent = "finally , please leave ";
    successDisplay.style.display = "block";
    
    setTimeout(function(){
        successDisplay.style.display = "none";
    }, 3000);

    return;

})
