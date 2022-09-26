const Intern = require("../lib/Intern");
const intern = new Intern("Arkin", "789", "arkingoodpup@email.com", "Good Boi University");

describe("Intern", () => {

    it("should return intern school name", () => {

        const name = "Valeria"
        const id = "112233";
        const email = "valgonzalez13@yahoo.com";
        const school = "Texas State University";
        const intern = new Intern(name, id, email, school);
        expect(intern.school).toBe(school);
    });
 
    it("should return school from object", () => {

        expect(intern.school).toBe("Good Boi University");
    });

    it("should return Intern role", () => {

        expect(intern.getRole()).toBe("Intern");
    })
})