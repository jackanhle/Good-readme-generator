function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/license-${data.license}-gray)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ![badge](https://img.shields.io/badge/license-${data.license}-gray)
  
    ## Description:
  
    ${data.description}
  
    ## Table of Contents:
  
    [Istallation](#installation)
  
    [Usage](#usage)
  
    [Contribution](#contribution)
  
    [Test](#test)
  
    [License](#license)
  
    [Questions](#question)
  
    ## Installation:
  
    ${data.installation}
  
    ## Usage:
  
    ${data.usage}
  
    ## Contribution:
  
    ${data.contribution}
  
    ## Test:
  
    ${data.test}
  
    ## License:
  
    ![badge](https://img.shields.io/badge/license-${data.license}-gray)
  
    ## Questions? :
  
    My GitHub link:${data.github}
  
    If you have any quiestions you can email me at: ${data.email}
    `;
  
  }
  
  module.exports = generateMarkdown;
  