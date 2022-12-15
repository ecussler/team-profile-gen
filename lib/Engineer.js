const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); 
        this.github = github; 
    }

    getGithub() {

    }

    getRole() {
        console.log(`${this.name} is an Engineer at the company.`); 
    }
}

module.exports = Engineer; 