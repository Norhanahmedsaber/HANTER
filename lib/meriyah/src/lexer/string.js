"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStringError = exports.parseEscape = exports.scanString = void 0;
var errors_1 = require("../errors");
var common_1 = require("./common");
var charClassifier_1 = require("./charClassifier");
function scanString(parser, context, quote) {
  var start = parser.index;
  var ret = '';
  var _char = (0, common_1.advanceChar)(parser);
  var marker = parser.index;
  while ((charClassifier_1.CharTypes[_char] & 8) === 0) {
    if (_char === quote) {
      ret += parser.source.slice(marker, parser.index);
      (0, common_1.advanceChar)(parser);
      if (context & 512) parser.tokenRaw = parser.source.slice(start, parser.index);
      parser.tokenValue = ret;
      return 134283267;
    }
    if ((_char & 8) === 8 && _char === 92) {
      ret += parser.source.slice(marker, parser.index);
      _char = (0, common_1.advanceChar)(parser);
      if (_char < 0x7f || _char === 8232 || _char === 8233) {
        var code = parseEscape(parser, context, _char);
        if (code >= 0) ret += (0, common_1.fromCodePoint)(code);else handleStringError(parser, code, 0);
      } else {
        ret += (0, common_1.fromCodePoint)(_char);
      }
      marker = parser.index + 1;
    }
    if (parser.index >= parser.end) (0, errors_1.report)(parser, 14);
    _char = (0, common_1.advanceChar)(parser);
  }
  (0, errors_1.report)(parser, 14);
}
exports.scanString = scanString;
function parseEscape(parser, context, first) {
  switch (first) {
    case 98:
      return 8;
    case 102:
      return 12;
    case 114:
      return 13;
    case 110:
      return 10;
    case 116:
      return 9;
    case 118:
      return 11;
    case 13:
      {
        if (parser.index < parser.end) {
          var nextChar = parser.source.charCodeAt(parser.index + 1);
          if (nextChar === 10) {
            parser.index = parser.index + 1;
            parser.currentChar = nextChar;
          }
        }
      }
    case 10:
    case 8232:
    case 8233:
      parser.column = -1;
      parser.line++;
      return -1;
    case 48:
    case 49:
    case 50:
    case 51:
      {
        var code = first - 48;
        var index = parser.index + 1;
        var column = parser.column + 1;
        if (index < parser.end) {
          var next = parser.source.charCodeAt(index);
          if ((charClassifier_1.CharTypes[next] & 32) === 0) {
            if ((code !== 0 || charClassifier_1.CharTypes[next] & 512) && context & 1024) return -2;
          } else if (context & 1024) {
            return -2;
          } else {
            parser.currentChar = next;
            code = code << 3 | next - 48;
            index++;
            column++;
            if (index < parser.end) {
              var next_1 = parser.source.charCodeAt(index);
              if (charClassifier_1.CharTypes[next_1] & 32) {
                parser.currentChar = next_1;
                code = code << 3 | next_1 - 48;
                index++;
                column++;
              }
            }
            parser.flags |= 64;
            parser.index = index - 1;
            parser.column = column - 1;
          }
        }
        return code;
      }
    case 52:
    case 53:
    case 54:
    case 55:
      {
        if (context & 1024) return -2;
        var code = first - 48;
        var index = parser.index + 1;
        var column = parser.column + 1;
        if (index < parser.end) {
          var next = parser.source.charCodeAt(index);
          if (charClassifier_1.CharTypes[next] & 32) {
            code = code << 3 | next - 48;
            parser.currentChar = next;
            parser.index = index;
            parser.column = column;
          }
        }
        parser.flags |= 64;
        return code;
      }
    case 120:
      {
        var ch1 = (0, common_1.advanceChar)(parser);
        if ((charClassifier_1.CharTypes[ch1] & 64) === 0) return -4;
        var hi = (0, common_1.toHex)(ch1);
        var ch2 = (0, common_1.advanceChar)(parser);
        if ((charClassifier_1.CharTypes[ch2] & 64) === 0) return -4;
        var lo = (0, common_1.toHex)(ch2);
        return hi << 4 | lo;
      }
    case 117:
      {
        var ch = (0, common_1.advanceChar)(parser);
        if (parser.currentChar === 123) {
          var code = 0;
          while ((charClassifier_1.CharTypes[(0, common_1.advanceChar)(parser)] & 64) !== 0) {
            code = code << 4 | (0, common_1.toHex)(parser.currentChar);
            if (code > 1114111) return -5;
          }
          if (parser.currentChar < 1 || parser.currentChar !== 125) {
            return -4;
          }
          return code;
        } else {
          if ((charClassifier_1.CharTypes[ch] & 64) === 0) return -4;
          var ch2 = parser.source.charCodeAt(parser.index + 1);
          if ((charClassifier_1.CharTypes[ch2] & 64) === 0) return -4;
          var ch3 = parser.source.charCodeAt(parser.index + 2);
          if ((charClassifier_1.CharTypes[ch3] & 64) === 0) return -4;
          var ch4 = parser.source.charCodeAt(parser.index + 3);
          if ((charClassifier_1.CharTypes[ch4] & 64) === 0) return -4;
          parser.index += 3;
          parser.column += 3;
          parser.currentChar = parser.source.charCodeAt(parser.index);
          return (0, common_1.toHex)(ch) << 12 | (0, common_1.toHex)(ch2) << 8 | (0, common_1.toHex)(ch3) << 4 | (0, common_1.toHex)(ch4);
        }
      }
    case 56:
    case 57:
      if ((context & 256) === 0) return -3;
    default:
      return first;
  }
}
exports.parseEscape = parseEscape;
function handleStringError(state, code, isTemplate) {
  switch (code) {
    case -1:
      return;
    case -2:
      (0, errors_1.report)(state, isTemplate ? 2 : 1);
    case -3:
      (0, errors_1.report)(state, 13);
    case -4:
      (0, errors_1.report)(state, 6);
    case -5:
      (0, errors_1.report)(state, 102);
    default:
  }
}
exports.handleStringError = handleStringError;