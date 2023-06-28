//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require("./generateMarkdown.js");





// TODO: Create an array of questions for user input
const questions = [

{
    type: 'input',
    name: 'title',
    message: 'What is your Projects Title?',



},
// make a table of contents?
{
    type: 'input',
    name: 'description',
    message: 'Please give a brief summary of your project and how it works:',


},
{
    type:'input',
    name: 'installation',
    message:'Please provide detailed installation instructions for your project',
},
{
    type: 'input',
    name: 'usage',
    message: 'give a brief summary of the usage info/data',
},
{
    type: 'input',
    name: 'contributions',
    message: 'Please provide details of the contributions to this project',
},
{
    type: 'input',
    name: 'testing',
    message: 'please provide brief summary about the testing instructions'

},
{
    type: 'list',
    name: 'license',
    message: 'Choose your license type',
    choices: ['MIT','Apache 2.0','GNU'],


},
{
    type:'input',
    name: 'username',
    message: 'enter your Github username:',
},
{
    type:'input',
    name:'email',
    message: 'Enter your email here:'
}






];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`README file ${fileName} has been saved!`);
  });
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
 .then(response => {
    console.log(response)
    var template = generateMarkdown(response)
    return template
 }).then(readmeContent => {
    writeToFile("README.md",readmeContent)
 })
  }

// Function call to initialize app
init();

