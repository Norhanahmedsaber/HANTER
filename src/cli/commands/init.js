const chalk = require('chalk');
const initHandler = require('../services/init')
// init command: initialize the hanter.config file if doesn't exist 
const init = {
            command:'init',
            describe:"Initialize the hanter.config file if doesn't exist",
            handler:()=>{
                initHandler()
            }
        }

module.exports = init