const Manager = require("../lib/Manager");
// Object
const manager = new Manager("Arkin", "789", "arkingoodpup@email.com", "111");

describe("Manager", () => {

    it("should return manager office number", () => {

        const name = "Valeria";
        const id = "112233";
        const email = "valgonzalez13@yahoo.com";
        const officeNumber = "555";
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });


    // test to get Manager's office number
    it("should return office number from object", () => {

        expect(manager.getOffice()).toBe("111");
    });

    // test to get role of Manager
    it("should return Manager role", () => {

        expect(manager.getRole()).toBe("Manager");
    });
});