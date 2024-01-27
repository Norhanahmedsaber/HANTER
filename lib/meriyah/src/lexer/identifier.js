"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanUnicodeEscape = exports.scanIdentifierUnicodeEscape = exports.scanPrivateIdentifier = exports.scanIdentifierSlowCase = exports.scanUnicodeIdentifier = exports.scanIdentifier = void 0;
var token_1 = require("../token");
var common_1 = require("./common");
var charClassifier_1 = require("./charClassifier");
var errors_1 = require("../errors");
function scanIdentifier(parser, context, isValidAsKeyword) {
  while (charClassifier_1.isIdPart[(0, common_1.advanceChar)(parser)]) {}
  parser.tokenValue = parser.source.slice(parser.tokenPos, parser.index);
  return parser.currentChar !== 92 && parser.currentChar <= 0x7e ? token_1.descKeywordTable[parser.tokenValue] || 208897 : scanIdentifierSlowCase(parser, context, 0, isValidAsKeyword);
}
exports.scanIdentifier = scanIdentifier;
function scanUnicodeIdentifier(parser, context) {
  var cookedChar = scanIdentifierUnicodeEscape(parser);
  if (!(0, charClassifier_1.isIdentifierPart)(cookedChar)) (0, errors_1.report)(parser, 4);
  parser.tokenValue = (0, common_1.fromCodePoint)(cookedChar);
  return scanIdentifierSlowCase(parser, context, 1, charClassifier_1.CharTypes[cookedChar] & 4);
}
exports.scanUnicodeIdentifier = scanUnicodeIdentifier;
function scanIdentifierSlowCase(parser, context, hasEscape, isValidAsKeyword) {
  var start = parser.index;
  while (parser.index < parser.end) {
    if (parser.currentChar === 92) {
      parser.tokenValue += parser.source.slice(start, parser.index);
      hasEscape = 1;
      var code = scanIdentifierUnicodeEscape(parser);
      if (!(0, charClassifier_1.isIdentifierPart)(code)) (0, errors_1.report)(parser, 4);
      isValidAsKeyword = isValidAsKeyword && charClassifier_1.CharTypes[code] & 4;
      parser.tokenValue += (0, common_1.fromCodePoint)(code);
      start = parser.index;
    } else if ((0, charClassifier_1.isIdentifierPart)(parser.currentChar) || (0, common_1.consumeMultiUnitCodePoint)(parser, parser.currentChar)) {
      (0, common_1.advanceChar)(parser);
    } else {
      break;
    }
  }
  if (parser.index <= parser.end) {
    parser.tokenValue += parser.source.slice(start, parser.index);
  }
  var length = parser.tokenValue.length;
  if (isValidAsKeyword && length >= 2 && length <= 11) {
    var token = token_1.descKeywordTable[parser.tokenValue];
    if (token === void 0) return 208897;
    if (!hasEscape) return token;
    if (token === 209008) {
      if ((context & (2048 | 4194304)) === 0) {
        return token;
      }
      return 121;
    }
    if (context & 1024) {
      if (token === 36972) {
        return 122;
      }
      if ((token & 36864) === 36864) {
        return 122;
      }
      if ((token & 20480) === 20480) {
        if (context & 1073741824 && (context & 8192) === 0) {
          return token;
        } else {
          return 121;
        }
      }
      return 143483;
    }
    if (context & 1073741824 && (context & 8192) === 0 && (token & 20480) === 20480) return token;
    if (token === 241773) {
      return context & 1073741824 ? 143483 : context & 2097152 ? 121 : token;
    }
    if (token === 209007) {
      return 143483;
    }
    if ((token & 36864) === 36864) {
      return token;
    }
    return 121;
  }
  return 208897;
}
exports.scanIdentifierSlowCase = scanIdentifierSlowCase;
function scanPrivateIdentifier(parser) {
  if (!(0, charClassifier_1.isIdentifierStart)((0, common_1.advanceChar)(parser))) (0, errors_1.report)(parser, 94);
  return 131;
}
exports.scanPrivateIdentifier = scanPrivateIdentifier;
function scanIdentifierUnicodeEscape(parser) {
  if (parser.source.charCodeAt(parser.index + 1) !== 117) {
    (0, errors_1.report)(parser, 4);
  }
  parser.currentChar = parser.source.charCodeAt(parser.index += 2);
  return scanUnicodeEscape(parser);
}
exports.scanIdentifierUnicodeEscape = scanIdentifierUnicodeEscape;
function scanUnicodeEscape(parser) {
  var codePoint = 0;
  var _char = parser.currentChar;
  if (_char === 123) {
    var begin = parser.index - 2;
    while (charClassifier_1.CharTypes[(0, common_1.advanceChar)(parser)] & 64) {
      codePoint = codePoint << 4 | (0, common_1.toHex)(parser.currentChar);
      if (codePoint > 1114111) (0, errors_1.reportScannerError)(begin, parser.line, parser.index + 1, 102);
    }
    if (parser.currentChar !== 125) {
      (0, errors_1.reportScannerError)(begin, parser.line, parser.index - 1, 6);
    }
    (0, common_1.advanceChar)(parser);
    return codePoint;
  }
  if ((charClassifier_1.CharTypes[_char] & 64) === 0) (0, errors_1.report)(parser, 6);
  var char2 = parser.source.charCodeAt(parser.index + 1);
  if ((charClassifier_1.CharTypes[char2] & 64) === 0) (0, errors_1.report)(parser, 6);
  var char3 = parser.source.charCodeAt(parser.index + 2);
  if ((charClassifier_1.CharTypes[char3] & 64) === 0) (0, errors_1.report)(parser, 6);
  var char4 = parser.source.charCodeAt(parser.index + 3);
  if ((charClassifier_1.CharTypes[char4] & 64) === 0) (0, errors_1.report)(parser, 6);
  codePoint = (0, common_1.toHex)(_char) << 12 | (0, common_1.toHex)(char2) << 8 | (0, common_1.toHex)(char3) << 4 | (0, common_1.toHex)(char4);
  parser.currentChar = parser.source.charCodeAt(parser.index += 4);
  return codePoint;
}
exports.scanUnicodeEscape = scanUnicodeEscape;