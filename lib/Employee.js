class Employee {
    constructor (name, id, email) {
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }

    getName() {
        return this.name; 
    }

    getID() {
        return this.id; 
    }

    getEmail() {
        return this.email; 
    }

    getRole() {
        return `${this.name} is an Employee of the company.`
    }
}

// const newEmployee = new Employee('Elena', 1, 'email@email.com'); 

// newEmployee.getName(); 
// newEmployee.getID(); 
// newEmployee.getEmail(); 

module.exports = Employee; 