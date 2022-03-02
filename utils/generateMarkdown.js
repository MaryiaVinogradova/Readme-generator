// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseChoice = ['Apache License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Common Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser Public License v3.0', 'Mozilla Public License 2.0'];
function renderLicenseBadge(license) {
  if (license ===licenseChoice[0]){
    return "![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)"
  } else if (license===licenseChoice[1]){
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }else if (license===licenseChoice[2]){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }else if (license===licenseChoice[3]){
    return "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
  }else if (license===licenseChoice[4]){
    return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  }else if (license===licenseChoice[5]){
    return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  }else if (license===licenseChoice[6]){
    return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)"
  }else if (license===licenseChoice[7]){
    return "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
  }else if (license===licenseChoice[8]){
    return "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)"
  }else if (license===licenseChoice[9]){
    return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
  }else if (license===licenseChoice[10]){
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === licenseChoice[0]){
    return `[${licenseChoice[0]}](https://opensource.org/licenses/Apache-2.0)`
  }else if(license === licenseChoice[1]){
    return`[${licenseChoice[1]}](https://www.gnu.org/licenses/gpl-3.0)`
  }else if(license === licenseChoice[2]){
    return`[${licenseChoice[2]}](https://opensource.org/licenses/MIT)`
  }else if(license === licenseChoice[3]){
    return`[${licenseChoice[3]}](https://opensource.org/licenses/BSD-2-Clause)`
  }else if(license === licenseChoice[4]){
    return`[${licenseChoice[4]}](https://www.boost.org/LICENSE_1_0.txt)`
  }else if(license === licenseChoice[5]){
    return`[${licenseChoice[5]}](https://creativecommons.org/publicdomain/zero/1.0/)`
  }else if(license === licenseChoice[6]){
    return`[${licenseChoice[6]}](https://opensource.org/licenses/EPL-1.0)`
  }else if(license === licenseChoice[7]){
    return`[${licenseChoice[7]}](https://www.gnu.org/licenses/agpl-3.0)`
  }else if(license === licenseChoice[8]){
    return`[${licenseChoice[8]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }else if(license === licenseChoice[9]){
    return`[${licenseChoice[9]}](https://www.gnu.org/licenses/agpl-3.0)`
  }else if(license === licenseChoice[10]){
    return`[${licenseChoice[10]}](https://opensource.org/licenses/MPL-2.0)`
  }else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ===licenseChoice[0]){
    return`Read about license ${licenseChoice[0]}: `
  }else if (license === licenseChoice[1]){
    return`Read about license ${licenseChoice[1]}:`
  }else if (license === licenseChoice[2]){
    return`Read about license ${licenseChoice[2]}:`
  }else if (license === licenseChoice[3]){
    return`Read about license ${licenseChoice[3]}:`
  }else if (license === licenseChoice[4]){
    return`Read about license ${licenseChoice[4]}:`
  }else if (license === licenseChoice[5]){
    return`Read about license ${licenseChoice[5]}:`
  }else if (license === licenseChoice[6]){
    return`Read about license ${licenseChoice[6]}:`
  }else if (license === licenseChoice[7]){
    return`Read about license ${licenseChoice[7]}:`
  }else if (license === licenseChoice[8]){
    return`Read about license ${licenseChoice[8]}:`
  }else if (license === licenseChoice[9]){
    return`Read about license ${licenseChoice[9]}:`
  }else if (license === licenseChoice[10]){
    return`Read about license ${licenseChoice[10]}:`
  }else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  console.log(data)
;  return `# ${data.filename}  

  ## 
  ${renderLicenseBadge(data.license)}
  ${data.license}
  ## Information
  - [License] 
  - [Description] 
  - [Installation] 
  - [Usage] 
  - [Contributing] 
  - [Tests] 
  - [Questions] 

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Questions
  ${data.username} (https://github.com/${data.username})

  ${data.email}
`
}

module.exports = generateMarkdown;
