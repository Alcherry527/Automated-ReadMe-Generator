// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your Project About?",
  },
  {
    type: "input",
    name: "installation",
    message: "How To Install this Application",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this Application Used For?",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Who contributed to this Project and who can Contribute in the Future?",
  },
  {
    type: "input",
    name: "test",
    message: "This is how you Test this Code",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use?",
    choices: ["MIT", "Apache License 2.0"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("ReadMeTest.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
