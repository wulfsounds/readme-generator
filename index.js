// TODO: Include packages needed for this application
const fs = require('fs');
// const util = require('util')
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown')
const figlet = require('figlet');


function intro() {
    //ASCII Art Header
    figlet('README Generator!', function(err, data) {
      if(err) {
        console.log(`He's dead Jim...`);
        console.dir(err);
        return;
      }
      console.log(data)
      init();
    });

} 

// TODO: Create a function to initialize app
function init() {
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
        message: 'Provide a link to a screenshot or video of the project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Provide a title for the screenshot',
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
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open Source"
        ]
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
      {
        type: 'input',
        message: 'Provide an email in case anyone has questions regarding your work.',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Provide your github user name',
        name: 'github',
      },
    ])
    .then((response) => {
      console.log(response);
      const finalReadme = generateReadme(response)

      fs.writeFile("README.md", finalReadme, function (err) {
          if (err) console.error(err);
      });
      console.log('README successfully created.');
  });
}
  // Function call to initialize app
intro();