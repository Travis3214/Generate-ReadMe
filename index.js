// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?', 
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT','Apache','None'],
        message: 'What license are you using?', 
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who worked on it?', 
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command will be used for running test?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?', 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) =>
    err ? console.error(err) : console.log("Success!")
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        writeToFile('readme.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
