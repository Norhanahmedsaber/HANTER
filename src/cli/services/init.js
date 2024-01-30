const chalk = require('chalk')
const fs = require('fs')
module.exports = function handle () {
    if(fs.existsSync('./hanterconfig.json')) {
        if(process.argv.includes('--force')) {
            initConfigFile()
        }else {
            console.log(chalk.bold.green('hanterconfig.json already exists\n'));
            console.log(chalk.bold.yellow('If you want to reset default config format add --force to over write the existing file \nor delete the file and run the command "hanter init" again.\n'));
        }
    }else {
        initConfigFile();
    }

}
function initConfigFile() {
    console.log(chalk.bold.green('Initializing hanterconfig.json....\n'));
    fs.writeFileSync('./hanterconfig.json', defaultConfig())
    console.log(chalk.bold.green('File Created Successfully!\n'));
}
function defaultConfig() {
    return '{\n\t"exculdeRules": [""],\n\t"exculdeRulesDirs": [""],\n\t"ignoredDirs": ["node_modules", "dist"],\n\t"extensions": ["js"],\n\t"ignoredPatterns":[]\n}'

}
