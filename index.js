// Packages needed to run the application. 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const employee = require('./lib/Employee'); 
const manager = require('./lib/Manager'); 
const engineer = require('./lib/Engineer'); 
const intern = require('./lib/Intern'); 

const addNewQs = [
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Would you like to add another team member?'
    }, 
    {
        type: 'list', 
        name: 'typeAdd', 
        message: 'What type of team member would you like to add?', 
        choices: ['Manger', 'Engineer', 'Intern']
    }
]

const managerQs = [
    {
        type: 'input', 
        name: 'managerName', 
        message: `What is your manager's name?`
    }, 
    {
        type: 'number', 
        name: 'managerID', 
        message: 'What is their ID number?', 
    }, 
    {
        type: 'input', 
        name: 'managerEmail', 
        message: 'What is their email address?', 
        default: 'email@email.com'
    }, 
    {
        type: 'number', 
        name: 'managerOffice', 
        message: 'What is their office number?'
    }
]

const engineerQs = [
    {
        type: 'input', 
        name: 'engineerName', 
        message: `What is your engineer's name?`
    }, 
    {
        type: 'number', 
        name: 'engineerID', 
        message: 'What is their ID number?', 
    }, 
    {
        type: 'input', 
        name: 'engineerEmail', 
        message: 'What is their email address?', 
        default: 'email@email.com'
    }, 
    {
        type: 'input', 
        name: 'github', 
        message: 'What is their GitHub username?'
    }
]

const internQs = [
    {
        type: 'input', 
        name: 'internName', 
        message: `What is your intern's name?`
    }, 
    {
        type: 'number', 
        name: 'internID', 
        message: 'What is their ID number?', 
    }, 
    {
        type: 'input', 
        name: 'internEmail', 
        message: 'What is their email address?', 
        default: 'email@email.com'
    },   
    {
        type: 'input', 
        name: 'school', 
        message: 'What school does your intern attend?'
    }
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
    .then((response) =>
    console.log(response)); 
}

init(); 