import passwordValidator from "./passwordValidator.js";
import view from "./view";

export default function app(
    aValidator=passwordValidator(), aView=view()){
    return {
        init: () => {
            aView.init();
            aView.onValidate((password1, password2) => {
                if (aValidator.isValid(password1)){
                    aView.renderValidPasswordMessage();
                }
                else {
                    aView.renderInvalidPasswordMessage();
                }
            });
            console.log('Initialized!');
        }
    };
}
