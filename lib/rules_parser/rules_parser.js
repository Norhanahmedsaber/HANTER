"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseRule;
var _meriyah = require("../meryiah/src/meriyah.js");
var _abstractSyntaxTree = _interopRequireDefault(require("abstract-syntax-tree"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function parseRule(rule) {
  for (var _i = 0, _Object$keys = Object.keys(rule); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (key == "pattern" || key == "pattern-not") {
      rule[key] = parsePattern(rule[key]);
    } else if (key == "patterns-either" || key == "patterns") {
      rule[key] = parseContainer(rule[key]);
    }
  }
  return rule;
}
function parseContainer(container) {
  for (var i in container) {
    if (container[i].pattern) {
      container[i].pattern = parsePattern(container[i].pattern);
    } else if (container[i]['pattern-not']) {
      container[i]['pattern-not'] = parsePattern(container[i]['pattern-not']);
    } else if (container[i].patterns) {
      container[i].patterns = parseContainer(container[i].patterns);
    } else if (container[i]['patterns-either']) {
      container[i]['patterns-either'] = parseContainer(container[i]['patterns-either']);
    }
  }
  return container;
}
function parsePattern(rule) {
  try {
    return _abstractSyntaxTree["default"].parse(rule);
  } catch (err) {
    console.log(err);
  }
}