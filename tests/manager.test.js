  
const { describe, it, expect } = require("@jest/globals");
const Manager = require("../TeamMems/Manager");

describe("Manager", () => {
    describe("initialization", () => {
        it("should do a check to see if the new object is an instance of Manager", () => {
            const newManager = new Manager();
            expect(newManager instanceof Manager).toEqual(true);
        });

        it("should do a check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Chase";
            const newId = "0004";
            const setEmail = "chasenicks81@gmail.com";
            const newOffice = "6G";
            const newManager = new Manager(name, newId, setEmail, newOffice);

            expect(newManager.name).toEqual(name);
            expect(newManager.id).toEqual(newId);
            expect(newManager.email).toEqual(setEmail);
            expect(newManager.officeNumber).toEqual(newOffice);
        });
    });

    describe("getRole and getOfficeNumber functions", () => {
        it("should call getRole() and return the role of Manager", () => {
            const name = "Chase";
            const newId = "0004";
            const setEmail = "chasenicks81@gmail.com";
            const newManager = new Manager(name, newId, setEmail);
            expect(newManager.getRole()).toEqual("Manager");
        });
        it("should call getOfficeNumber() and return the office number of Manager", () => {
            const name = "Chase";
            const newId = "0004";
            const setEmail = "chasenicks81@gmail.com";
            const newOffice = "6G";
            const newManager = new Manager(name, newId, setEmail, newOffice);
            expect(newManager.getOfficeNumber()).toEqual(newOffice);
        });
    });
});