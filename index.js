// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?',
    },
    {
        type: 'input',
        name: 'usageinfo',
        message: 'What is the usage information for this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'What are the testing instructions for this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license would you like to use for this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
