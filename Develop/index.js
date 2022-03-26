// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create a generator function that enters the reponse into the readme file.

const generateReadme = (response) => {
  return `# ${response.title}
  // license goes here.
  
  ## Description
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  
  ${response.installation}

  ## Usage
  
  ${response.usage}

  ## Contributions
  
  ${response.contributions}

  ## Testing
  
  ${response.tests}

  ## License
  
  ${response.license}

  ## Questions
  
  For questions, contact me via <a href="mailto:${response.email}">email</a> or <a href="mailto:${response.github}">Gihub</a>.
  
  <!-- https://github.com/(profile) -->`
}

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the application?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Add a brief discription of the application.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How is the application installed?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Provide a screenshot or video of the project.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide a title for the alt attribute',
      name: 'alt',
    },
    {
      type: 'input',
      message: 'Provide a link to the repo',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'Provide a link to the deployed site',
      name: 'deploy',
    },
    {
      type: 'input',
      message: 'Provide a license (if applicable)',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Add contributors (if any)',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Provide any additional tests.',
      name: 'tests',
    },
  ])
  .then((response) => {
    console.log(response);
    const finalReadme = generateReadme(response)

        fs.writeFile("README.md", finalReadme, function (err) {
            if (err) console.error(err);
        });
        console.log('success');
  })


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
