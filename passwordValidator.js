export default function passwordValidator(){
    return {
        isValid: (password) => {
            return password == "foo";
        }
    };
}


//module.exports = passwordValidator;