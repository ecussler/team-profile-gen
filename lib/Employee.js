class Employee {
    constructor (name, id, email) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }

    getName() {
        console.log(this.name); 
    }

    getID() {
        console.log(this.id); 
    }

    getEmail() {
        console.log(this.email); 
    }

    getRole() {
        console.log(`${this.name} is an Employee of the company.`)
    }
}

// const newEmployee = new Employee('Elena', 1, 'email@email.com'); 

// newEmployee.getName(); 
// newEmployee.getID(); 
// newEmployee.getEmail(); 

module.exports = Employee; 