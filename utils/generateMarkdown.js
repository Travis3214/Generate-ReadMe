// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license !== "None"){
    badge = "![Badge for License](https://shields.io/badge/license-" + license + "-red.svg)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';

  switch(license){
    case "MIT":
      link = 'https://mit-license.org/';
      break;

    case "Apache":
      link = 'https://www.apache.org/license/LICENSE-2.0.html';
      break;

    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let lic = "";
  let licLink = renderLicenseLink(license)

  if(license !== "None") {
    lic = licLink;
  }
  return lic;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  ${data.email}\n
  https://github.com/${data.username}
  `;
  }

  module.exports = generateMarkdown;
