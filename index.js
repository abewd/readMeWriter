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
    type: "Input",
    name: "q1motivation",
    message: "What was your motivation?",
    //validate: (Function) Receive the user input and answers hash.
    //Should return true if the value is valid, and an error message (String) otherwise.
    //If false is returned, a default error message is provided.
  },
  // QUESTION 2
  {
    type: "Input",
    name: "q2whyBuildThis",
    message: "Why did you build this project?",
  },
  // QUESTION 3
  {
    type: "Input",
    name: "q3whatProblem",
    message: "Why problem does it solve?",
  },
  // QUESTION 4
  {
    type: "Input",
    name: "q4whatLearn",
    message: "Why did you this project?",
  },
  // QUESTION 5
  {
    type: "Input",
    name: "q5installation",
    message: "Why did you this project?",
  },
  // QUESTION 6
  {
    type: "Input",
    name: "q6useage",
    message: "Why did you this project?",
  },
  // QUESTION 7
  {
    type: "Input",
    name: "q7credits",
    message: "Why did you this project?",
  },
  // QUESTION 8
  {
    type: "List",
    name: "q8licence",
    message: "Select the license you wish to use:",
    choices: ["MIT", "Apache", "GPL", "Other"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
