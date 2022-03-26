// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const util = require('util')
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown')
// const createFile = util.promisify(fs.writeFile)


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
      console.log(`You have entered: ${response}`);
      const finalReadme = generateReadme(response)

      fs.writeFile("README.md", finalReadme, function (err) {
          if (err) console.error(err);
      });
      console.log('README successfully created.');
  });
}

// TODO: Create a function to initialize app
// async function init() {
//   try {
//     const response = await userInput();
//     console.log(response);
//     await createFile('README.md', generateReadme(response));
//   } catch(err) {
//     console.error(err);
//   }
// }
  // Function call to initialize app
init();