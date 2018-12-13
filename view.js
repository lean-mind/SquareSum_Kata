export default function view(){
    let subscribers = [];
    return {
        subscribeValidation: (subscriber) => {
            subscribers.push(subscriber);
        },
        renderValidPasswordMessage: () => {
            document.getElementById("result").value = "Valid!";
        },
        init: () => {
            let validateButton = document.getElementById("validate");
            validateButton.addEventListener("click", () => {
               let password1 = document
                   .getElementById("password1").value;
               let password2 = document
                   .getElementById("password2").value;
               subscribers[0](password1, password2);
            });
        }
    };
}
