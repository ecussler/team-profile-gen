// Packages needed to run the application. 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); 
const employee = require('./lib/Employee'); 
const manager = require('./lib/Manager'); 
const engineer = require('./lib/Engineer'); 
const intern = require('./lib/Intern'); 
const render = require('./src/render'); 
// const HTML = require('./dist/index.html'); 

const addNewQs = [
    {
        type: 'input', 
        name: 'manager-name', 
        message: `What is your the manager's name?`
    }, 
    {
        type: 'number', 
        name: 'manager-id', 
        message: 'What is their ID number?', 
    }, 
    {
        type: 'input', 
        name: 'manager-email', 
        message: 'What is their email address?', 
        default: 'email@email.com'
    }, 
    {
        type: 'number', 
        name: 'manager-office', 
        message: 'What is their office number?'
    },
    {
        type: 'loop',
        name: 'add-employees', 
        message: 'Would you like to add another employee?',
        questions: [
            {
                type: 'list', 
                name: 'type', 
                message: 'What type of team member would you like to add?', 
                choices: ['Engineer', 'Intern'] 
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
            {
                type: 'input', 
                name: 'github', 
                message: 'What is their GitHub username?',
                when: (employee) => employee.type === "Engineer"
            },
            {
                type: 'input', 
                name: 'school', 
                message: 'What school does your intern attend?', 
                when: (employee) => employee.type === "Intern"  
            },
        ]
    }
]


const employees = [];

// function initManager(){
//     inquirer.prompt(managerQs)
//     .then((response) =>
//     console.log(response)); 
// }

// function initEngineer(){
//     inquirer.prompt(engineerQs)
//     .then((response) =>
//     console.log(response)); 
// }

// function initIntern() {
//     inquirer.prompt(internQs)
//     .then((response) =>
//     console.log(response)); 
// }

function init() {
    inquirer.prompt(addNewQs)
    .then((response) => {
        console.log(response); 
    })
}




init(); 
