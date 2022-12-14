const Employee = require('./Employee'); 

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email); 
        this.officeNum = officeNum; 
    }

    getRole() {
        console.log(`${this.name} is a Manager at the company.`); 
    }
}

module.exports = Manager; 