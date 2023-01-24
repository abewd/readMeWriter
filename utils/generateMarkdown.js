// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ${data.q8license}
  
  # ${data.projectTitle}
  
  ## Description
  
  The motivation behind this project is ${data.q1motivation}. 
  
  This project was built because ${data.q2whyBuildThis}.
  
  This command line solves the problem of ${data.q3whatProblem}.
  
  This project taught me ${data.q4whatLearn}.
  
  
  ## Installation
  To install this application ${data.q5installation}.
  
  ## Usage
  The intended use of this application is ${data.q6useage}.
  
  
  ## Credits
  The development person/team responsible for this is ${data.q7credits}.
  
  ## Licence 
  This project has a ${data.q8license} license.
  
  `;
}

module.exports = generateMarkdown;
