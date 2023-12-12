const chalk = require('chalk')
const fs = require('fs')
module.exports = function handle () {
    if(fs.existsSync('./hanterconfig.json')) {
        console.log(chalk.bold.green('hanterconfig.json already exists\n'));
        console.log(chalk.bold.yellow('If you want to reset default config format delete the file and run the command "hanter init" again.\n'));
    }else {
        console.log(chalk.bold.green('Initializing hanterconfig.json....\n'));
        initConfigFile();
    }

}
function initConfigFile() {
    fs.writeFileSync('./hanterconfig.json', defaultConfig())
    console.log(chalk.bold.green('File Created Successfully!\n'));
}
function defaultConfig() {
    return '{\n\t"exculdeRules": [""],\n\t"exculdeRulesDirs": [""],\n\t"ignoredPatterns": [""],\n\t"extensions": ["js", "mjs"]\n}'
}
