"use strict";

var chalk = require('chalk');
var initHandler = require('../services/init');
// init command: initialize the hanter.config file if doesn't exist 
var init = {
  command: 'init',
  describe: "Initialize the hanter.config file if doesn't exist",
  handler: function handler() {
    initHandler();
  }
};
module.exports = init;