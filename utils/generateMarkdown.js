const licenses = {
  MIT: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  GPL: "The GNU General Public License (GPL) is a widely used free software license that guarantees end users the freedom to run, study, share, and modify the software. The GPL requires that any derivative works be distributed under the same license, ensuring that the source code remains freely available and accessible to all users.",
  Apache:
    "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  Unlicense:
    "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
    ? `![License Badge](https://img.shields.io/badge/license-${license}-green.svg)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `https://choosealicense.com/licenses/${license}/` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return data.license
    ? `
  ## License
  - ${data.license}
  - ${renderLicenseLink(data)}
  - ${licenses[data.license]}
  `
    : "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.projectTitle}
  
  ${renderLicenseBadge(data.q8licence)}

  ## Description

  ## Table Of Contents
  
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

  ## Questions 

  If you have any questions feel free contact me: 
  - Github: https://github.com/${q9userName}
  - Email: ${q10eMail}
  
  ## Screenshots 
  assets\screenshot1.png

  ## Video 

  `;
}

module.exports = generateMarkdown;
