// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Choose one',
      choices: [
       'Apache License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Common Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser Public License v3.0', 'Mozilla Public License 2.0'],
    },
    {
      type: 'input',
      message: 'What is your file name?',
      name: 'filename',
    },
    {
      type: 'input',
      message: 'What is description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What to install?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to use?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is contribution?',
      name: 'contributing',
    },
    {
      type: "input",
      name: "tests",
      message: "Your input here for tests"
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email adress?"
   },
  
  ])



  .then((response) => {
  // generateMarkdown(response)
  fs.writeFile('README.md', generateMarkdown(response), (err) =>{
  err ? console.error(err) : console.log('All set')
  });
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // fs.writeFile(generateMarkdown(response))
}

// Function call to initialize app
init();
