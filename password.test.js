import passwordValidator from "./passwordValidator";


describe('The password validator', () => {
    it("works", () => {
        expect(passwordValidator().isValid("foo")).toBe(true);
    });
});