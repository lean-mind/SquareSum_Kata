import passwordValidator from "./passwordValidator.js";
import view from "./view";

export default function app(){
    let theView = view();
    return {
        init: () => {
            theView.init();
            theView.subscribeValidation((password1, password2) => {
                if (passwordValidator().isValid(password1)){
                    theView.renderValidPasswordMessage();
                }
                else {
                    theView.renderInvalidPasswordMessage();
                }
            });
            console.log('Initialized!');
        }
    };
}
