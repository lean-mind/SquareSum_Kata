export default function view(){
    let validationClickSubscribers = [];
    function informSubscribers(password1, password2) {
        validationClickSubscribers.forEach((validation) => {
            validation(password1, password2);
        });
    }
    return {
        informSubscribers: informSubscribers,
        onValidationClicked: (validation) => {
            validationClickSubscribers.push(validation);
        },
        renderValidPasswordMessage: () => {
            document.getElementById("result").value = "Valid!";
        },
        renderInvalidPasswordMessage: () => {
            document.getElementById("result").value = "Invalid!";
        },
        init: () => {
            let validateButton = document.getElementById("validate");
            validateButton.addEventListener("click", () => {
               let password1 = document
                   .getElementById("password1").value;
               let password2 = document
                   .getElementById("password2").value;
               informSubscribers(password1, password2);
            });
        }
    };
}

