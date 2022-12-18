// Packages needed to run the application. 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); 
const Employee = require('./lib/Employee'); 
// const manager = require('./lib/Manager'); 
// const engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 
const render = require('./src/render'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
// const HTML = require('./dist/index.html'); 

const questions = [
    {
        type: 'input', 
        name: 'managerName', 
        message: `What is your the manager's name?`
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
    },
    {
        type: 'loop',
        name: 'addEmployees', 
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
                type: 'input', 
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


function init() {
    inquirer.prompt(questions)
    .then((response) => {
        // console.log(response); 
        // console.log(response.addEmployees)
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice); 
        const employeesArr = response.addEmployees; 
        const engineers = []; 
        const interns = []; 

        for (let i = 0; i < employeesArr.length; i++) {
            const employee = employeesArr[i]; 
            if (employee.type === "Engineer") {
                const engineer = new Engineer(employee.name, employee.ID, employee.email, employee.github); 
                engineers.push(engineer); 
            } else if (employee.type === "Intern") {
                const intern = new Intern(employee.name, employee.ID, employee.email, employee.school); 
                interns.push(intern); 
            }
        }
        // console.log(engineers, interns); 
    }) 
}




init(); 
