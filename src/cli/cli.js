const figlet = require('figlet')
const yargs = require('yargs')

function run () {
    const text="HANTER"
    const asciiArt = figlet.textSync(text,{
        font:'ANSI Shadow'
    })
    console.log(asciiArt)
    const commands = yargs.commandDir('commands').demandCommand().help().argv
    
} 
module.exports = run