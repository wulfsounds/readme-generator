// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ![license](https://img.shields.io/badge/license-${response.license}-yellow)

## Description

${response.description}

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Contributions](#contributions)
[Testing](#testing)
[License](#license)
[Questions](#questions)

## Installation Instructions

${response.install}

## Usage Information

![${response.alt}](${response.usage})

## Contributions

${response.contributions}

## Testing

${response.tests}

## License

All work included in this repo is reserved under the ${response.license} license.

## Questions

For questions, contact me via <a href="mailto:${response.email}">email</a>.

Find me on <a href="https://github.com/${response.github}">GitHub</a>`;
}

module.exports = generateMarkdown;
