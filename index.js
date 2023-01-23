const fs = require("fs");
const inquirer = require("inquirer")
const htmlTemplate = (name, location, linkedin, github, githubUrl) => {
let string =`<!DOCTYPE html>
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
        </head>
        <body>
                <h1>Hello World, I'm:<br>${name}</h1>
                <p>${location}</p>
                <h2>Where to find me:</h2>
                <ul>
                        <a><li>${linkedin}</li></a>
                        <a href=${githubUrl}><li>${github}</li></a>
                </ul>
        </body>
        </html>
`
return string
}

inquirer.prompt([
                {
                        type: 'input',
                        name: 'user', 
                        message: 'What is your name?',
                },
                {
                        type:'input',
                        name: 'location', 
                        message: 'Where are you located? (city, state)',
                },
                {
                        type:'input',
                        name: 'linkedin', 
                        message: 'What is your LinkedIn username?',
                },
                {
                        type:'input',
                        name: 'github', 
                        message: "What is your GitHub?",
                },
        ]) .then((data) => {
                const filename = `${data.user}.html`
                const githubUrl = `https://github.com/${data.github}`
                // const userFile = htmlTemplate(data.user, data.location, data.linkedin, data.github)
                fs.writeFile(filename, htmlTemplate(data.user, data.location, data.linkedin, data.github, githubUrl), (err) =>
                        err ? console.log(err) : console.log('Success!')
                );
        });
