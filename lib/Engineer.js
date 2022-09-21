const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(id, name, githubUsername) {
    this.id = id;
   this.name = name;
   this.githubUsername = githubUsername


  }

  printInfo() {
    console.log(`Name: ${this.name}`)
    console.log(`Github username: ${this.githubUsername}`)

  }
}


module.exports = Engineer;
