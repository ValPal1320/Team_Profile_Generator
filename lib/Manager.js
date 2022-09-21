const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office) {
        // from Employee.js
        super (name, id, email);

        this.office = office;
    };

    getOffice() {
        return this.office;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;
