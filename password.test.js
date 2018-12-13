import passwordValidator from "./passwordValidator";
import app from "./app";
import view from "./view";


describe('The password validator', () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <div>
            <label>Password:</label> 
            <input id="password1" type="text"/>
                <label>Re-type password:</label>
            <input id="password2" type="text"/>
            <button id="validate">Validate</button>
            <label id="result"></label>
        </div>`;
    });

    it("works", () => {
        expect(passwordValidator().isValid("foo")).toBe(true);
    });

    it("throws event when validation is clicked", () => {
        let theView = view();
        theView.init();
        let expectedPassword1 = "abcd";
        let actualPassword1 = "";
        let expectedPassword2 = "xyz";
        let actualPassword2 = "";
        document.getElementById("password1").value = expectedPassword1;
        document.getElementById("password2").value = expectedPassword2;
        theView.subscribeValidation((password1, password2) => {
            actualPassword1 = password1;
            actualPassword2 = password2;
        });
        document.getElementsByTagName("button")[0].click();
        expect(actualPassword1).toBe(expectedPassword1);
        expect(actualPassword2).toBe(expectedPassword2);
    });

    it("renders validation result", () => {
        let theView = view();
        theView.init();
        theView.renderValidPasswordMessage();
        expect(document.getElementById("result").value)
            .toBe("Valid!");
    });

    it("renders invalidation result", () => {
        let theView = view();
        theView.init();
        theView.renderInvalidPasswordMessage();
        expect(document.getElementById("result").value)
            .toBe("Invalid!");
    });

    it('validates password from view', () => {
        let theApp = app();
        theApp.init();
        document.getElementById("password1").value = "abcd";
        document.getElementById("password2").value = "abcd";
        document.getElementsByTagName("button")[0].click();
        expect(document.getElementById("result").value)
            .toBe("Invalid!");
    });

    xit('compares that password is introduced correctly', () => {
        let theApp = app();
        document.body.innerHTML = `
        <div>
            <label>Password:</label> 
            <input id="password1" type="text"/>
                <label>Re-type password:</label>
            <input id="password2" type="text"/>
            <button id="validate">Validate</button>
            <label id="result"></label>
        </div>`;
        theApp.init();
        document.getElementById("password1").value = "abcd";
        document.getElementById("password2").value = "xyz";
        document.getElementsByTagName("button")[0].click();
        expect(document.getElementById("result").innerText)
            .toBe("Passwords don't match");
    });
});