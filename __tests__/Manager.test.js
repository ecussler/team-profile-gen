const Manager = require('../lib/Manager'); 

test('Instantiates a new manager instance', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(typeof manager).toBe('object');  
})

test('Employee has name property', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.name).toBe('Maude');  
})

test('Manager has id property', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.id).toBe(4);  
})

test('Manager has email property', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.email).toBe('email@gmail.com');  
})

test('Manager has officeNum property', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.officeNum).toBe(12);  
})

test('can get name by calling getName()', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.getName()).toBe('Maude');  
})

test('can get id by calling getID()', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.getID()).toBe(4);  
})

test('can get email by calling getEmail()', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.getEmail()).toBe('email@gmail.com');  
})

test('can get role by calling getRole()', () => {
    const manager = new Manager('Maude', 4, 'email@gmail.com', 12); 
    expect(manager.getRole()).toBe('Maude is a Manager at the company.');  
})