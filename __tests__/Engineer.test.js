const Engineer = require('../lib/Engineer'); 

test('Instantiates a new engineer instance', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(typeof engineer).toBe('object');  
})

test('Employee has name property', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.name).toBe('Claud');  
})

test('Engineer has id property', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.id).toBe(4);  
})

test('Engineer has email property', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.email).toBe('email@gmail.com');  
})

test('Engineer has github property', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.github).toBe('oddClaud');  
})

test('can get name by calling getName()', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.getName()).toBe('Claud');  
})

test('can get id by calling getID()', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.getID()).toBe(4);  
})

test('can get email by calling getEmail()', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.getEmail()).toBe('email@gmail.com');  
})

test('can get github by calling getGithub()', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.getGithub()).toBe('oddClaud');  
})

test('can get role by calling getRole()', () => {
    const engineer = new Engineer('Claud', 4, 'email@gmail.com', 'oddClaud'); 
    expect(engineer.getRole()).toBe('Claud is an Engineer at the company.');  
})