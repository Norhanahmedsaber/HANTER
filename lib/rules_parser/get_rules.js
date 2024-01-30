"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRules;
var _file_traverser = _interopRequireDefault(require("../file_traverser/file_traverser.js"));
var _fs = _interopRequireDefault(require("fs"));
var _jsYaml = _interopRequireDefault(require("js-yaml"));
var _parsingconfig = _interopRequireDefault(require("../utils/parsingconfig.js"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getRules() {
  var rulesJson = [];
  var config = (0, _parsingconfig["default"])();
  var rulesFiles = (0, _file_traverser["default"])('./node_modules/hanter/rules', {
    extensions: ["yml"],
    ignoredDirs: config.exculdeRulesDirs,
    ignoredPatterns: []
  });
  rulesFiles.forEach(function (rule) {
    if (!isRuleContained(rule, config.exculdeRules)) {
      var ruleJson = ymlToJson(rule);
      if (ruleJson) {
        rulesJson.push(ruleJson);
      }
    }
  });
  return rulesJson;
}
function ymlToJson(ymlPath) {
  try {
    var ruleFile = _fs["default"].readFileSync(ymlPath, 'utf-8');
    var ruleJson = _jsYaml["default"].load(ruleFile);
    return ruleJson;
  } catch (error) {
    console.error("Error processing ".concat(ymlPath, ": ").concat(error.message || error));
    return null;
  }
}
function isRuleContained(rule, configRules) {
  var ruleName = _path["default"].basename(rule);
  return configRules.includes(ruleName);
}