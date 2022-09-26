const Employee = require('../lib/Employee');
// Object
const employee = new Employee("Arkin", "789", "arkingoodpup@email.com");

describe("Employee", () => {

    it("should return name", () => {

        const name = "Valeria";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("should return ID", () => {

        const name = "Valeria"
        const id = "112233";
        const employee = new Employee(name, id);
        expect(employee.id).toBe(id);

    });

    it("should return email", () => {

        const name = "Valeria"
        const id = "112233";
        const email = "valgonzalez13@yahoo.com";
        const employee = new Employee(name, id, email);
        expect(employee.email).toBe(email);
    });

    // test to get name
    it("should return name from object", () => {

        expect(employee.getName()).toBe("Arkin");
    });
    
    // test to get ID number
    it("should return ID from object", () => {

        expect(employee.getId()).toBe("789");
    });
   
    // test to get email
    it("should return email from object", () => {

        expect(employee.getEmail()).toBe("arkingoodpup@email.com");
    });
    
    // test to get role of Employee
    it("should return Employee role", () => {

        expect(employee.getRole()).toBe("Employee");
    });
});