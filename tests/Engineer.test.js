const Engineer = require("../lib/Engineer");
// Object
const engineer = new Engineer("Arkin", "789", "arkingoodpup@email.com", "GoodBoi");

describe("Engineer", () => {

    it("should return employee github username", () => {

        const name = "Valeria"
        const id = "112233";
        const email = "valgonzalez13@yahoo.com";
        const github = "ValPal1320";
        const engineer = new Engineer(name, id, email, github);
        expect(engineer.github).toBe(github);
    });

    // test to get Engineer's GitHub username
    it("should return github username from object", () => {

        expect(engineer.github).toBe("GoodBoi");
    });
  
    // test to get role of Engineer
    it("should return Engineer role", () => {

        expect(engineer.getRole()).toBe("Engineer");
    })
});