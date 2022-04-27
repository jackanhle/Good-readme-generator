const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
   
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is your description of the project?',
    name: 'description',
},
{
    type: 'input',
    message: 'How do you install the project?',
    name: 'installation',
},
{
   type: 'input',
   message: 'What is the usage information?',
   name: 'usage',
},
{
   type: 'input',
   message: 'What is your contribution guideline?',
   name: 'contribution',
},
{
    type: 'input',
    message: 'What is your test instructions?',
    name: 'test',
},
{
    type: 'list',
    message: 'Which license suitable for you',
    name: 'license',
    choices: [
        'MIT',
        'Apache',
        'ISC',
        'GNU GPLv3',
    ]
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
]

function writeToFile(fileName, data) {
    ("README.md", markDown.generateMarkdown(data), function(err) {
        if(err) throw err; 
        console.log("generate Readme.md")
    })
}
function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        const markDownString = markDown(userInfo)
        fs.writeFile('README.md', markDownString, function(err) {
            if(err) {
                console.log(err)
            }else {
                console.log('generated Readme')
            }
        })
    },
    e => {
        console.log(`The file err`);
    })
};
init();
