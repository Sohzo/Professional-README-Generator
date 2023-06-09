//Includes packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
//Creates an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: ['MIT', 'GPL', 'BY'],
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

//Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
    );
}

//Creates a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (userinput) {
        writeToFile("README.md", generateMarkdown(userinput));
    });
};

//Function call to initialize app
init();
