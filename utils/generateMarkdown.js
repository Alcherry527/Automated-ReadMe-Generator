// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseName(license) {
  if (license === "MIT") {
    return "MIT";
  }
  if (license === "Apache License 2.0") {
    return "Apache%202.0";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseUrl(license) {
  if (license === "MIT") {
    return "mit";
  }
  if (license === "Apache License 2.0") {
    return "apache-2.0";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![Static Badge](https://img.shields.io/badge/license-${getLicenseName(
  data.license
)}-green)

// TODO: CREATE A TABLE OF CONTENTS 

 ## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}


## Tests
${data.test}

## Questions
If you have further questions contact me at ${data.email}

My github username is [${data.github}](https://github.com/${data.github}). 


[license](https://choosealicense.com/licenses/${getLicenseUrl(data.license)})
`;
}

module.exports = generateMarkdown;
