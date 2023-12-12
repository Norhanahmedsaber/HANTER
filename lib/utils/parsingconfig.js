"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseConfig;
var _extractor = _interopRequireDefault(require("../extractor/extractor.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function parseConfig() {
  var config = (0, _extractor["default"])('./hanterconfig.json');
  return JSON.parse(config);
}