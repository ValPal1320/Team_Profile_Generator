const Employee = require('../lib/Employee');
const employee = new Employee("Arkin", 789, "arkingoodpup@email.com");

describe("Employee", () => {

    it("should return employee name", () => {

        const name = "Valeria"
        const employee = new Employee(name)
        expect(employee.name).toBe(name);
    });
    
    it("should return employee ID", () => {

        const name = "Valeria"
        const id = "112233";
        const employee = new Employee(name, id);
        expect(employee.id).toBe(id);

    });
    
    it("should return employee email", () => {

        const name = "Valeria"
        const id = "112233";
        const email = "valgonzalez13@yahoo.com";
        const employee = new Employee(name, id, email);
        expect(employee.email).toBe(email);
    });

    
    it("should return employee name from object", () => {

        expect(employee.getName()).toBe("Arkin");
    });
    
    it("should return employee id from object", () => {

        expect(employee.getId()).toBe(789);
    });
    
    it("should return employee email from object", () => {

        expect(employee.getEmail()).toBe("arkingoodpup@email.com");
    });
    
    it("should return employee role", () => {

        expect(employee.getRole()).toBe("Employee");
    });
});