const inquirer = require('inquirer');

export const choices = ['+ Add', '- Subtract', '* Multiply', '/ Divide']

export const questions = [
    {
        type: 'list',
        name: 'operate',
        message: 'Select a operator',
        choices: choices
    },{
        type: 'input',
        name: 'number1',
        message: 'Introduce a number:',
        validate: (answer:number) => {
            let valid = !isNaN(answer);
            return valid || 'Enter a valid number';
        }
    },{
        type: 'input',
        name: 'number2',
        message: 'Introduce another number:',
        validate: (answer:number) => {
            let valid = !isNaN(answer);
            return valid || 'Enter a valid number';
        }
    }
]
