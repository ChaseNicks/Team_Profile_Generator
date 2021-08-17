const { describe, it, expect } = require("@jest/globals");
const Engineer = require("../TeamMems/engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("should do a check to see if the new object is an instance of Engineer", () => {
            const newEng = new Engineer();
            expect(newEng instanceof Engineer).toEqual(true);
        });

        it("should do a check to to see if the name, id, email, and github information is passed through the constuctor", () => {
            const name = "Chase";
            const newId = "0002";
            const setEmail = "chasenicks81@gmail.com";
            const github = "ChaseNicks";
            const newEng = new Engineer(name, newId, setEmail, github);

            expect(newEng.name).toEqual(name);
            expect(newEng.id).toEqual(newId);
            expect(newEng.email).toEqual(setEmail);
            expect(newEng.github).toEqual(github);
        });
    });

    describe("get role and github functions", () => {
        it("should call getRole() and return the role of engineer", () => {
            const name = "Chase";
            const newId = "0002";
            const setEmail = "chasenicks81@gmail.com";
            const newEng = new Engineer(name, newId, setEmail);
            expect(newEng.getRole()).toEqual("Engineer");
        });
        it("should call getGithub() and return the github user name of engineer", () => {
            const name = "Chase";
            const newId = "0002";
            const setEmail = "chasenicks81@gmail.com";
            const github = "ChaseNicks";
            const newEng = new Engineer(name, newId, setEmail, github);
            expect(newEng.getGithub()).toEqual(github);
        });
    });
});