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
        {
            type: 'editor',
            name: 'install',
            message: 'Enter intallation instructions for your project.  Make sure you save BEFORE closing the editor when finished.',
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'Enter usage instructions for your project.  Make sure you save BEFORE closing the editor when finished.',
        },
        {
            type: 'editor',
            name: 'contribution',
            message: 'Enter contribution guidelines for your project.  Make sure you save BEFORE closing the editor when finished.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your project',
            choices: ['Apache License 2.0', 
              'BSD 3-Clause \'New\' or \'Revised\' license', 
              'BSD 2-Clause \'Simplified\' or \'FreeBSD\' license', 
              'GNU General Public License (GPL)', 
              'GNU Library or \'Lesser\' General Public License (LGPL)', 
              'MIT license', 
              'Mozilla Public License 2.0', 
              'Common Development and Distribution License', 
              'Eclipse Public License version 2.0'],
          },
          {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
          },
    ]);
};


// TODO: Create a function to write README file
const writeToFile = async (fileName, data) =>{
    try {
        await writeFileAsync(fileName, data);
        console.log ('Your Readme.md is finished.');
    }
    catch (err){
        console.log(err);
        console.log('An error was made writing your file');
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
