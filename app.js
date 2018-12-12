import passwordValidator from "./passwordValidator.js";

export default function app(){
    return {
        init: () => {
            let validateButton = document.getElementById("validate");
            validateButton.addEventListener("click", () => {
               let password1 = document.getElementById("password1").value;
                let password2 = document.getElementById("password2").value;
                console.log(password1, password2);
                let resultLabel = document.getElementById("result");
                if (passwordValidator().isValid(password1)){
                    resultLabel.innerText = "Valid!";
                }
                else {
                    resultLabel.innerText = "Invalid!!!";
                }
            });

            console.log('Initialized!');
        }
    };
}
