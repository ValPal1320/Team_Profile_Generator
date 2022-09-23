//Node packages
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// to HTML
const generateHTML = require('./src/generateHTML.js');

const teamList = [];


const addEmployee = () => {
    if (teamList.length === 0) {
        console.log(chalk.black.bgGreen("Hello! Enter information about your team starting with the manager."));
    };
    
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: chalk.red('Please enter manager name:'),
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
            message: chalk.red("Enter manager's employee ID:"),
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
            message: chalk.red("Enter manager's email:"),
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return 'Sorry, please try again.';
                }
            }
        },
    ]).then((employeeData) => {
        if (teamList.length === 0) {
            addManager(employeeData);
        } else if (selectData.select === "Add Engineer") {
            addEngineer(employeeData);
        } else {
            addIntern(employeeData);
        };
    });
};

const addManager = (employeeData) => {
    inquirer.prompt([
        {
            
            type: 'input',
            name: 'officeNumber',
            message: chalk.red("Enter the manager's office number:"),
            validate: value => {
                if (isNaN(value)) {
                    return 'Sorry, please try again.';
                } else {
                    return true;
                }
            }
            
        },
    ]).then((managerData) => {
        const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, managerData.officeNumber);
        manager.role = manager.getRole();
        teamList.push(manager);
        select();
    });
};
    // inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'title',
    //         message: 'Hello! what is the title of your application?:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'description',
    //         message: 'Type a detailed description of your application:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'installation',
    //         message: 'Provide installation instructions for your application:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'usage',
    //         message: 'Type step-by-step instructions on how to use your application:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'contribute',
    //         message: 'Type step-by-step instructions for how to contribute to your application:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'tests',
    //         message: 'Provide any tests for your application:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'list',
    //         name: 'license',
    //         choices: ['None', 'MIT', 'GNU', 'Apache'],
    //     },
    //     {
    //         type: 'input',
    //         name: 'github',
    //         message: 'What is your GitHub username?:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },
    //     {
    //         type: 'input',
    //         name: 'email',
    //         message: 'What is your email address?:',
    //         validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
    //     },

    // ])
    // .then((answers) => {
    //     const readMeText = generateMarkdown(answers);
    //     fs.writeFile('./README.md', readMeText, err => {
    //         if (err) {
    //           console.error(err);
    //         }
    //       });
    //   });