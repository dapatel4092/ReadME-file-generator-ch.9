// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
  return `
##### For MIT License
[License](https://choosealicense.com/licenses/mit/)

  `
  break;
  case 'Apache 2.0':
    return `
##### for Apache 2.0
[License](https://choosealicense.com/licenses/apache-2.0/)
    `

  break;
  case 'GNU' :
      return `
##### for GNU
[License](https://choosealicense.com/licenses/gpl-3.0/)`
// default:

}

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}
${renderLicenseBadge(data.license)}


## Author: ${data.contributions}
[Github Profile](https://github.com/${data.username})



### Table Of Contents
---------------------
* [Description](#description)
* [Installtion](#installtion)
* [Usage](#usage)
* [Testing](#testing)
* [License](#license)
* [Contact](#contact)




#### Description
${data.description}

#### Installation
${data.installation}

#### Usage
${data.usage}

#### Testing
${data.testing}

#### license 
${renderLicenseSection(data.license)}

#### contact

For any questions regarding this project contact us here : ${data.email}

`;
}

module.exports = generateMarkdown;
