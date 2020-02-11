const chalk = require('chalk')
// console.log(chalk.yellow("Hello Yellow World"))
console.log(chalk.blue("Hello Blue World"))
// console.log(chalk.green("Hello Green World"))
'use strict';
const chalkPipe = require('chalk-pipe');
const inquirer = require('inquirer')

const add = require('./add.js')
const subtract = require('./subtract.js')
const multiply = require('./multiply.js')
const divide = require('./divide.js')

inquirer.prompt([{
  type: 'list',
  name: 'operator',
  message: chalk.red('Which operation?'),
  choices: ['Add', 'Subtract', 'Multiply', 'Divide']
},
{
  type: 'number',
  name: 'numA',
  message: chalk.blueBright('What is your First Number?')
},
{
  type: 'number',
  name: 'numB',
  message: chalk.greenBright('What is Your Second Number?')
}])
  .then(response => {
    console.log(response)
    let result = 0;

    const x = parseInt(response.numA)
    const y = parseInt(response.numB)

    switch (response.operator) {
      case 'Add':
        result = add(x, y)
        break
      case 'Subtract':
        result = subtract(x, y)
        break
      case 'Multiply':
        result = multiply(x, y)
        break
      case 'Divide':
        result = divide(x, y)
    }

    console.log(chalk.yellowBright(`The result is ${result}`))
  })