// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
  .prompt([
    {
      type: 'name',
      message: 'What is your file name?',
      name: 'filename',
    },
    {
      type: 'description',
      message: 'What is description?',
      name: 'description',
    },

    {
      type: 'checkbox',
      name: 'licenses',
      message: 'Choose one',
      choices: [
        'MIT', 'dA', 'Td', 'dd'],
    },
  
  ])



  .then((response) => {

  const tempLit = `README
 
    ${response.filename}
  
    ${response.description}`

  fs.writeFile('README.md', tempLit, (err) =>{
  err ? console.error(err) : console.log('All set')
  });
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
