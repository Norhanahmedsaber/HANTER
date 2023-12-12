import figlet from 'figlet'
import yargs from 'yargs'
import main from './services/main.js'
import { hideBin } from 'yargs/helpers'
function run () {
    const text="\nHANTER"
    const asciiArt = figlet.textSync(text,{
        font:'ANSI Shadow'
    })
    console.log("\n" + asciiArt)
    const commands = yargs(hideBin(process.argv)).commandDir('commands').demandCommand(0,"").argv
    if(!commands._.length) {
        main()
    }
    
} 
export default run