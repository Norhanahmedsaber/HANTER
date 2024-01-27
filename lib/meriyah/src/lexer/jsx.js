"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanJSXIdentifier = exports.scanJSXToken = exports.scanJSXString = exports.scanJSXAttributeValue = void 0;
var charClassifier_1 = require("./charClassifier");
var errors_1 = require("../errors");
var _1 = require("./");
var decodeHTML_1 = require("./decodeHTML");
function scanJSXAttributeValue(parser, context) {
  parser.startPos = parser.tokenPos = parser.index;
  parser.startColumn = parser.colPos = parser.column;
  parser.startLine = parser.linePos = parser.line;
  parser.token = charClassifier_1.CharTypes[parser.currentChar] & 8192 ? scanJSXString(parser, context) : (0, _1.scanSingleToken)(parser, context, 0);
  return parser.token;
}
exports.scanJSXAttributeValue = scanJSXAttributeValue;
function scanJSXString(parser, context) {
  var quote = parser.currentChar;
  var _char = (0, _1.advanceChar)(parser);
  var start = parser.index;
  while (_char !== quote) {
    if (parser.index >= parser.end) (0, errors_1.report)(parser, 14);
    _char = (0, _1.advanceChar)(parser);
  }
  if (_char !== quote) (0, errors_1.report)(parser, 14);
  parser.tokenValue = parser.source.slice(start, parser.index);
  (0, _1.advanceChar)(parser);
  if (context & 512) parser.tokenRaw = parser.source.slice(parser.tokenPos, parser.index);
  return 134283267;
}
exports.scanJSXString = scanJSXString;
function scanJSXToken(parser, context) {
  parser.startPos = parser.tokenPos = parser.index;
  parser.startColumn = parser.colPos = parser.column;
  parser.startLine = parser.linePos = parser.line;
  if (parser.index >= parser.end) return parser.token = 1048576;
  var token = _1.TokenLookup[parser.source.charCodeAt(parser.index)];
  switch (token) {
    case 8456258:
      {
        (0, _1.advanceChar)(parser);
        if (parser.currentChar === 47) {
          (0, _1.advanceChar)(parser);
          parser.token = 25;
        } else {
          parser.token = 8456258;
        }
        break;
      }
    case 2162700:
      {
        (0, _1.advanceChar)(parser);
        parser.token = 2162700;
        break;
      }
    default:
      {
        var state = 0;
        while (parser.index < parser.end) {
          var type = charClassifier_1.CharTypes[parser.source.charCodeAt(parser.index)];
          if (type & 1024) {
            state |= 1 | 4;
            (0, _1.scanNewLine)(parser);
          } else if (type & 2048) {
            (0, _1.consumeLineFeed)(parser, state);
            state = state & ~4 | 1;
          } else {
            (0, _1.advanceChar)(parser);
          }
          if (charClassifier_1.CharTypes[parser.currentChar] & 16384) break;
        }
        var raw = parser.source.slice(parser.tokenPos, parser.index);
        if (context & 512) parser.tokenRaw = raw;
        parser.tokenValue = (0, decodeHTML_1.decodeHTMLStrict)(raw);
        parser.token = 138;
      }
  }
  return parser.token;
}
exports.scanJSXToken = scanJSXToken;
function scanJSXIdentifier(parser) {
  if ((parser.token & 143360) === 143360) {
    var index = parser.index;
    var _char2 = parser.currentChar;
    while (charClassifier_1.CharTypes[_char2] & (32768 | 2)) {
      _char2 = (0, _1.advanceChar)(parser);
    }
    parser.tokenValue += parser.source.slice(index, parser.index);
  }
  parser.token = 208897;
  return parser.token;
}
exports.scanJSXIdentifier = scanJSXIdentifier;