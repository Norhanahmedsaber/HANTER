"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.ESTree = exports.parse = exports.parseModule = exports.parseScript = void 0;
var parser_1 = require("./parser");
var ESTree = require("./estree");
exports.ESTree = ESTree;
var meta = require("../package.json");
var version = meta.version;
exports.version = version;
function parseScript(source, options) {
  return (0, parser_1.parseSource)(source, options, 0);
}
exports.parseScript = parseScript;
function parseModule(source, options) {
  return (0, parser_1.parseSource)(source, options, 1024 | 2048);
}
exports.parseModule = parseModule;
function parse(source, options) {
  return (0, parser_1.parseSource)(source, options, 0);
}
exports.parse = parse;