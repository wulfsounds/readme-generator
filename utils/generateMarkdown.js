// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

![license](https://img.shields.io/badge/license-${response.license}-yellow)

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Installation Instructions

${response.install}

## Usage Information

![${response.alt}](${response.usage})

## Contributions

${response.contributors}

## Testing

${response.tests}

## License

All work included in this repo is reserved under the ${response.license} license.

## Questions

For questions, contact me via <a href="mailto:${response.email}">email</a>.

Find me on <a href="https://github.com/${response.github}">GitHub</a>`;
}

module.exports = generateMarkdown;
