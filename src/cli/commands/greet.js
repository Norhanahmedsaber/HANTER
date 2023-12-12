const chalk = require('chalk');
const { showHelp } = require('yargs');
//greet command 
const greet = {
            command:'greet',
            describe:'Greet Message',
            handler:()=>{
                console.log(chalk.bold.green('\nWelcome to HANTER!'));
                console.log(chalk.bold.green('Scan your code for security vulnerabilities and ensure a secure application.\n'));
                showHelp()
            }
        }

module.exports = greet