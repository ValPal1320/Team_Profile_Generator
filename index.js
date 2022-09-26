//Node packages
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// to HTML generator
const generateHTML = require('./src/generateHTML.js');
const { createInflate } = require('zlib');
const { markAsUntransferable } = require('worker_threads');

const teamList = [];


const addEmployee = (selectData) => {
    if (teamList.length === 0) {
    console.log(chalk.black.bgGreen("Hello! Enter information about your team starting with the manager."));
    };
    
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: chalk.red('Please enter employee name:'),
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Sorry, please try again.';
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: chalk.red("Enter employee ID:"),
            validate: value => {
                if (isNaN(value)) {
                    return 'Sorry, please try again.';
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: chalk.red("Enter employee email:"),
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Sorry, please try again.';
                }
            }
        },
        ]).then((employee) => {
            if (teamList.length === 0) {
                addManager(employee);
            } else if (selectData.select === "Add Engineer") {
                addEngineer(employee);
            } else {
                addIntern(employee);
            };
        });
    };

const addManager = (employee) => {
    inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: chalk.red("Enter manager's office number:"),
            validate: value => {
                if (isNaN(value)) {
                    return 'Sorry, please try again.';
                } else {
                    return true;
                }
            }
        }
    ]).then((managerData) => {
        const manager = new Manager(employee.name, employee.id, employee.email, managerData.officeNumber);
        manager.role = manager.getRole();
        teamList.push(manager);
        select();
    })
}

const addEngineer = (employee) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: chalk.red("Enter the engineer's GitHub username:"),
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Sorry, please try again.';
                }
            },
        },
    ]).then((engineerData) => {
        const engineer = new Engineer(employee.name, employee.id, employee.email, engineerData.github);
        engineer.role = engineer.getRole();
        teamList.push(engineer);
        select();
    })
};

const addIntern = (employee) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: chalk.red("Enter the intern's school name:"),
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Sorry, please try again.';
                }
            },
        },
    ]).then((internData) => {
        const intern = new Intern(employee.name, employee.id, employee.email, internData.school);
        intern.role = intern.getRole();
        teamList.push(intern);
        select();
    })
};

const select = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "select",
            choices: ["Add Engineer", "Add Intern", "Finish"]
        }
    ]).then((data) => {
        if (data.select === "Add Engineer" || data.select === "Add Intern") {
            addEmployee(data);
        } else {
            const newHTML = generateHTML(teamList);
            createHTML(newHTML);
        };
    });
};

const createHTML = (newHTML) => {
    fs.writeFile('./dist/team-index.html', newHTML, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(chalk.black.bgGreen("File Successfully Generated"))
        }
    });
}


addEmployee();