// Packages needed to run the application. 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); 

// Linked class libraries
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

// Linked src to render cards and HTML 
const {renderManager, renderEngineer, renderIntern} = require('./src/cards');
const renderHTML = require('./src/html'); 


// Inquirer questions
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
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice); 
        const employeesArr = response.addEmployees; 
        const engineers = []; 
        const interns = []; 

        // Inquirer loop creates array, this for loop runs through those objects and splits them into an engineer and intern array
        for (let i = 0; i < employeesArr.length; i++) {
            const employee = employeesArr[i]; 
            if (employee.type === "Engineer") {
                const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github); 
                engineers.push(engineer); 
            } else if (employee.type === "Intern") {
                const intern = new Intern(employee.name, employee.id, employee.email, employee.school); 
                interns.push(intern); 
                // console.log(intern.name); 
            }
        }
        
        // Rendering employee card
        const managerCard = renderManager(manager); 
        const engineerCards = engineers.map(engineer => renderEngineer(engineer)).join(''); 
        const internCards = interns.map(intern => renderIntern(intern)).join('');
        const finalHTML = renderHTML(managerCard, engineerCards, internCards); 

        fs.writeFile('index.html', finalHTML, (err) =>
        err ? console.log(err) : console.log('We have finished rendering your team profile!'));  
    }) 
}




init(); 
