// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./assets/utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writefile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Enter a descritpion of you project.  Make sure you save BEFORE closing the editor when finished.',
        },
    ]
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
