// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return `![badge](https://img.shields.io/badge/license-apache-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else return "license";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `[${license}(${renderLicenseLink(license)})]`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
![badge](https://img.shields.io/github/last-commit/${data.gitHub}/${data.repo})
## Description
${data.description}
## Install
${data.install}
## Usage
${data.usage}
## Contribution
${data.contribution}
## License
${data.license}
## GitHub
${data.gitHub}
## Email
${data.email}

`;
}

module.exports = generateMarkdown;
