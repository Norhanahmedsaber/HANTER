"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _figlet = _interopRequireDefault(require("figlet"));
var _yargs = _interopRequireDefault(require("yargs"));
var _main = _interopRequireDefault(require("./services/main.js"));
var _helpers = require("yargs/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function run() {
  var text = "\nHANTER";
  var asciiArt = _figlet["default"].textSync(text, {
    font: 'ANSI Shadow'
  });
  console.log("\n" + asciiArt);
  var commands = (0, _yargs["default"])((0, _helpers.hideBin)(process.argv)).commandDir('commands').demandCommand(0, "").argv;
  if (!commands.length) {
    (0, _main["default"])();
  }
}
module.exports = run;