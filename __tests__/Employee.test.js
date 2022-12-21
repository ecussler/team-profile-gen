const Employee = require('../lib/Employee');

test('Instantiates a new employee instance', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(typeof employee).toBe('object');  
})

test('Employee has name property', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.name).toBe('Bob');  
})

test('Employee has id property', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.id).toBe(4);  
})

test('Employee has email property', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.email).toBe('email@gmail.com');  
})

test('can get name by calling getName()', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.getName()).toBe('Bob');  
})

test('can get id by calling getID()', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.getID()).toBe(4);  
})

test('can get email by calling getEmail()', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.getEmail()).toBe('email@gmail.com');  
})

test('can get role by calling getRole()', () => {
    const employee = new Employee('Bob', 4, 'email@gmail.com'); 
    expect(employee.getRole()).toBe('Bob is an Employee of the company.');  
})