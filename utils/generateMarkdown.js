//Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

//Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "MIT":
      return "https://img.shields.io/badge/license-MIT-blue";
    case "GPL":
      return "https://img.shields.io/badge/license-GPL-blue";
    case "BY":
      return "https://img.shields.io/badge/license-BY-blue";
    default:
      return "";
  };
};

//Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  };
};

//Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usageinfo}

  ## License

  Project licensed under ${data.license}

  ## Contributing

  ${data.contribution}

  ## Test Instructions

  ${data.testinstructions}

  ## Questions

  * [Github](https://github.com/${data.github})
  * Please email me with any questions at ${data.email}

`;
}

module.exports = generateMarkdown;
