// TODO: Include packages needed for this application
// .gitignore successful
// Added npm install inquirer

const inquirer = require("inquirer");
// you only use relative path when its a code youve written, inquirer isnt.
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // PROJECT TITLE
  {
    type: "input",
    name: "projectTitle",
    message: "What is the Project Title?",
  },

  // QUESTION 1
  {
    type: "input",
    name: "q1motivation",
    message: "What was your motivation?",
    //validate: (Function) Receive the user input and answers hash.
    //Should return true if the value is valid, and an error message (String) otherwise.
    //If false is returned, a default error message is provided.
  },
  // QUESTION 2
  {
    type: "input",
    name: "q2whyBuildThis",
    message: "Why did you build this project?",
  },
  // QUESTION 3
  {
    type: "input",
    name: "q3whatProblem",
    message: "Why problem does it solve?",
  },
  // QUESTION 4
  {
    type: "input",
    name: "q4whatLearn",
    message: "Why did you learn during this project?",
  },
  // QUESTION 5
  {
    type: "input",
    name: "q5installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  // QUESTION 6
  {
    type: "input",
    name: "q6useage",
    message: "Provide instructions and examples for use.",
  },
  // QUESTION 7
  {
    type: "input",
    name: "q7credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  // QUESTION 8
  {
    type: "list",
    name: "q8licence",
    message: "Select the license you wish to use:",
    choices: ["MIT", "Apache", "GPL", "Other"],
  },
  // QUESTION 9
  {
    type: "input",
    name: "q9userName",
    message: "Please input your GitHub username:",
  },

  // QUESTION 10
  {
    type: "input",
    name: "q10eMail",
    message: "Please input your email:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
  let markDown = runGenMarkdown(userInputs);

  fs.writeFile(fileName, markDown, function () {
    console.log("readMe.md has been generated!");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    // .then means is a promise, where whatever it is ttached to is prompts in this case (answers)
    // itll wait for the value to come back from the input (yourserlf typing)
    // after it gets the answer itll continue the code
    // the .then will wait your question is answered

    .then((answers) => {
      // pass these answers to generate markdown . js
      generateMarkdown(answers);
      console.log(generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
