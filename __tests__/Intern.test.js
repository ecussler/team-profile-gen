const Intern = require('../lib/Intern'); 

test('Instantiates a new intern instance', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(typeof intern).toBe('object');  
})

test('Employee has name property', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.name).toBe('Rob');  
})

test('Intern has id property', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.id).toBe(4);  
})

test('Intern has email property', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.email).toBe('email@gmail.com');  
})

test('Intern has school property', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.school).toBe('University of Denver');  
})

test('can get name by calling getName()', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.getName()).toBe('Rob');  
})

test('can get id by calling getID()', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.getID()).toBe(4);  
})

test('can get email by calling getEmail()', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.getEmail()).toBe('email@gmail.com');  
})

test('can get school by calling getSchool()', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.getSchool()).toBe('University of Denver');  
})

test('can get role by calling getRole()', () => {
    const intern = new Intern('Rob', 4, 'email@gmail.com', 'University of Denver'); 
    expect(intern.getRole()).toBe('Rob is an Intern at the company.');  
})