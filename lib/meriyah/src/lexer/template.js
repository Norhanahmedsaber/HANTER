"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanTemplateTail = exports.scanTemplate = void 0;
var common_1 = require("./common");
var string_1 = require("./string");
var errors_1 = require("../errors");
function scanTemplate(parser, context) {
  var start = parser.index;
  var token = 67174409;
  var ret = '';
  var _char = (0, common_1.advanceChar)(parser);
  while (_char !== 96) {
    if (_char === 36 && parser.source.charCodeAt(parser.index + 1) === 123) {
      (0, common_1.advanceChar)(parser);
      token = 67174408;
      break;
    } else if ((_char & 8) === 8 && _char === 92) {
      _char = (0, common_1.advanceChar)(parser);
      if (_char > 0x7e) {
        ret += (0, common_1.fromCodePoint)(_char);
      } else {
        var code = (0, string_1.parseEscape)(parser, context | 1024, _char);
        if (code >= 0) {
          ret += (0, common_1.fromCodePoint)(code);
        } else if (code !== -1 && context & 65536) {
          ret = undefined;
          _char = scanBadTemplate(parser, _char);
          if (_char < 0) token = 67174408;
          break;
        } else {
          (0, string_1.handleStringError)(parser, code, 1);
        }
      }
    } else {
      if (parser.index < parser.end && _char === 13 && parser.source.charCodeAt(parser.index) === 10) {
        ret += (0, common_1.fromCodePoint)(_char);
        parser.currentChar = parser.source.charCodeAt(++parser.index);
      }
      if ((_char & 83) < 3 && _char === 10 || (_char ^ 8232) <= 1) {
        parser.column = -1;
        parser.line++;
      }
      ret += (0, common_1.fromCodePoint)(_char);
    }
    if (parser.index >= parser.end) (0, errors_1.report)(parser, 15);
    _char = (0, common_1.advanceChar)(parser);
  }
  (0, common_1.advanceChar)(parser);
  parser.tokenValue = ret;
  parser.tokenRaw = parser.source.slice(start + 1, parser.index - (token === 67174409 ? 1 : 2));
  return token;
}
exports.scanTemplate = scanTemplate;
function scanBadTemplate(parser, ch) {
  while (ch !== 96) {
    switch (ch) {
      case 36:
        {
          var index = parser.index + 1;
          if (index < parser.end && parser.source.charCodeAt(index) === 123) {
            parser.index = index;
            parser.column++;
            return -ch;
          }
          break;
        }
      case 10:
      case 8232:
      case 8233:
        parser.column = -1;
        parser.line++;
      default:
    }
    if (parser.index >= parser.end) (0, errors_1.report)(parser, 15);
    ch = (0, common_1.advanceChar)(parser);
  }
  return ch;
}
function scanTemplateTail(parser, context) {
  if (parser.index >= parser.end) (0, errors_1.report)(parser, 0);
  parser.index--;
  parser.column--;
  return scanTemplate(parser, context);
}
exports.scanTemplateTail = scanTemplateTail;