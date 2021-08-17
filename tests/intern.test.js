const { describe, it, expect } = require("@jest/globals");
const Intern = require("../TeamMems/intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("should do a check to see if the new object is an instance of Intern", () => {
            const newInt = new Intern();
            expect(newInt instanceof Intern).toEqual(true);
        });

        it("should do a check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Chase";
            const newId = "0003";
            const setEmail = "chasenicks81@gmail.com";
            const newSchool = "WCU";
            const newInt = new Intern(name, newId, setEmail, newSchool);

            expect(newInt.name).toEqual(name);
            expect(newInt.id).toEqual(newId);
            expect(newInt.email).toEqual(setEmail);
            expect(newInt.school).toEqual(newSchool);
        });
    });

    describe("getRole and getSchool functions", () => {
        it("should call getRole() and return the role of Intern", () => {
            const name = "Chase";
            const newId = "0003";
            const setEmail = "chasenicks81@gmail.com";
            const newInt = new Intern(name, newId, setEmail);
            expect(newInt.getRole()).toEqual("Intern");
        });
        it("should call getSchool() and return the school name of Intern", () => {
            const name = "Chase";
            const newId = "0003";
            const setEmail = "chasenicks81@gmail.com";
            const newSchool = "WCU";
            const newInt = new Intern(name, newId, setEmail, newSchool);
            expect(newInt.getSchool()).toEqual(newSchool);
        });
    });
});