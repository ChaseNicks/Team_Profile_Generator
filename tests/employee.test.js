const { expect } = require('@jest/globals');
const Employee = require('../TeamMems/employee');

describe("Employee", () => {
    describe("initialization", () => {
        it("should do a check to see if the initialized object is a new Employee class", () => {
            const newEmp = new Employee();
            expect(newEmp instanceof Employee).toEqual(true);
        });

        it("should attach the given name to the instance for Employee", () => {
            const name = "Chase";
            const newEmp = new Employee(name);
            expect(newEmp.name).toEqual(name);
        });

        it("should attach the given id to the instance for Employee", () => {
            const name = "Chase";
            const newID = "0001";
            const newEmp = new Employee(name, newID);
            expect(newEmp.id).toEqual(newID);
        });

        it("should attach the given email address to the instance for Employee", () => {
            const name = "Chase";
            const newID = "0001";
            const setEmail = "chasenicks81@gmail.com";
            const newEmp = new Employee(name, newID, setEmail);
            expect(newEmp.email).toEqual(setEmail);
        });
        it("should return the role for the instance of Employee", () => {
            const name = "Chase";
            const newID = "0001";
            const setEmail = "chasenicks81@gmail.com";
            const newEmp = new Employee(name, newID, setEmail);
            expect(newEmp.getRole()).toEqual("Employee");
        });
    });
});