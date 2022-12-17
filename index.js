// Packages needed to run the application. 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const employee = require('./lib/Employee'); 
const manager = require('./lib/Manager'); 
const engineer = require('./lib/Engineer'); 
const intern = require('./lib/Intern'); 

const addNewQs = [
    {
        type: 'list', 
        name: 'typeAdd', 
        message: 'What type of team member would you like to add?', 
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input', 
        name: 'name', 
        message: `What is your the employee's name?`
    }, 
    {
        type: 'number', 
        name: 'id', 
        message: 'What is their ID number?', 
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'What is their email address?', 
        default: 'email@email.com'
    }, 
]

const managerQs = [
    {
        type: 'number', 
        name: 'managerOffice', 
        message: 'What is their office number?'
    }
]

const engineerQs = [
    {
        type: 'input', 
        name: 'github', 
        message: 'What is their GitHub username?'
    }
]

const internQs = [
    {
        type: 'input', 
        name: 'school', 
        message: 'What school does your intern attend?'
    }
]

const addAnother = [
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another team member?'
    }, 
]

function initManager(){
    inquirer.prompt(managerQs)
    .then((response) =>
    console.log(response)); 
}

function initEngineer(){
    inquirer.prompt(engineerQs)
    .then((response) =>
    console.log(response)); 
}

function initIntern() {
    inquirer.prompt(internQs)
    .then((response) =>
    console.log(response)); 
}

function init() {
    inquirer.prompt(addNewQs)
    .then((response) => {
        if (response.typeAdd == "Manager") {
            initManager();
        } else if (response.typeAdd == "Engineer") {
            initEngineer(); 
        } else {
            initIntern(); 
        }
        console.log(response); 
    });

    inquirer.prompt(addAnother)
    .then((response) => 
        response ? init() : console.log("Your team profile has been generated!")
    )
}

init(); 