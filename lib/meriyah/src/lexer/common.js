"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTokenType = exports.toHex = exports.fromCodePoint = exports.isExoticECMAScriptWhitespace = exports.scanNewLine = exports.consumeLineFeed = exports.consumeMultiUnitCodePoint = exports.advanceChar = void 0;
var unicode_1 = require("../unicode");
var errors_1 = require("../errors");
function advanceChar(parser) {
  parser.column++;
  return parser.currentChar = parser.source.charCodeAt(++parser.index);
}
exports.advanceChar = advanceChar;
function consumeMultiUnitCodePoint(parser, hi) {
  if ((hi & 0xfc00) !== 55296) return 0;
  var lo = parser.source.charCodeAt(parser.index + 1);
  if ((lo & 0xfc00) !== 0xdc00) return 0;
  hi = parser.currentChar = 65536 + ((hi & 0x3ff) << 10) + (lo & 0x3ff);
  if ((unicode_1.unicodeLookup[(hi >>> 5) + 0] >>> hi & 31 & 1) === 0) {
    (0, errors_1.report)(parser, 18, fromCodePoint(hi));
  }
  parser.index++;
  parser.column++;
  return 1;
}
exports.consumeMultiUnitCodePoint = consumeMultiUnitCodePoint;
function consumeLineFeed(parser, state) {
  parser.currentChar = parser.source.charCodeAt(++parser.index);
  parser.flags |= 1;
  if ((state & 4) === 0) {
    parser.column = 0;
    parser.line++;
  }
}
exports.consumeLineFeed = consumeLineFeed;
function scanNewLine(parser) {
  parser.flags |= 1;
  parser.currentChar = parser.source.charCodeAt(++parser.index);
  parser.column = 0;
  parser.line++;
}
exports.scanNewLine = scanNewLine;
function isExoticECMAScriptWhitespace(ch) {
  return ch === 160 || ch === 65279 || ch === 133 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 8201 || ch === 65519;
}
exports.isExoticECMAScriptWhitespace = isExoticECMAScriptWhitespace;
function fromCodePoint(codePoint) {
  return codePoint <= 65535 ? String.fromCharCode(codePoint) : String.fromCharCode(codePoint >>> 10) + String.fromCharCode(codePoint & 0x3ff);
}
exports.fromCodePoint = fromCodePoint;
function toHex(code) {
  return code < 65 ? code - 48 : code - 65 + 10 & 0xf;
}
exports.toHex = toHex;
function convertTokenType(t) {
  switch (t) {
    case 134283266:
      return 'NumericLiteral';
    case 134283267:
      return 'StringLiteral';
    case 86021:
    case 86022:
      return 'BooleanLiteral';
    case 86023:
      return 'NullLiteral';
    case 65540:
      return 'RegularExpression';
    case 67174408:
    case 67174409:
    case 132:
      return 'TemplateLiteral';
    default:
      if ((t & 143360) === 143360) return 'Identifier';
      if ((t & 4096) === 4096) return 'Keyword';
      return 'Punctuator';
  }
}
exports.convertTokenType = convertTokenType;