export default function view(){
    let subscribers = [];
    function fireEvent(password1, password2) {
        subscribers.forEach((subscriber) => {
            subscriber(password1, password2);
        });
    }
    return {
        fireEvent: fireEvent,
        subscribeValidation: (subscriber) => {
            subscribers.push(subscriber);
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
               fireEvent(password1, password2);
            });
        }
    };
}

