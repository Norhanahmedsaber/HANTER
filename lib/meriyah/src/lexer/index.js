"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanRegularExpression = exports.scanTemplateTail = exports.scanTemplate = exports.scanNumber = exports.scanString = exports.scanUnicodeEscape = exports.scanPrivateIdentifier = exports.scanUnicodeIdentifier = exports.scanIdentifierSlowCase = exports.scanIdentifier = exports.isIdentifierPart = exports.isIdentifierStart = exports.CharTypes = exports.convertTokenType = exports.scanNewLine = exports.consumeLineFeed = exports.toHex = exports.fromCodePoint = exports.isExoticECMAScriptWhitespace = exports.consumeMultiUnitCodePoint = exports.advanceChar = exports.skipSingleHTMLComment = exports.skipHashBang = exports.skipSingleLineComment = exports.skipMultiLineComment = exports.TokenLookup = exports.nextToken = exports.scanSingleToken = void 0;
var scan_1 = require("./scan");
Object.defineProperty(exports, "scanSingleToken", {
  enumerable: true,
  get: function get() {
    return scan_1.scanSingleToken;
  }
});
Object.defineProperty(exports, "nextToken", {
  enumerable: true,
  get: function get() {
    return scan_1.nextToken;
  }
});
Object.defineProperty(exports, "TokenLookup", {
  enumerable: true,
  get: function get() {
    return scan_1.TokenLookup;
  }
});
var comments_1 = require("./comments");
Object.defineProperty(exports, "skipMultiLineComment", {
  enumerable: true,
  get: function get() {
    return comments_1.skipMultiLineComment;
  }
});
Object.defineProperty(exports, "skipSingleLineComment", {
  enumerable: true,
  get: function get() {
    return comments_1.skipSingleLineComment;
  }
});
Object.defineProperty(exports, "skipHashBang", {
  enumerable: true,
  get: function get() {
    return comments_1.skipHashBang;
  }
});
Object.defineProperty(exports, "skipSingleHTMLComment", {
  enumerable: true,
  get: function get() {
    return comments_1.skipSingleHTMLComment;
  }
});
var common_1 = require("./common");
Object.defineProperty(exports, "advanceChar", {
  enumerable: true,
  get: function get() {
    return common_1.advanceChar;
  }
});
Object.defineProperty(exports, "consumeMultiUnitCodePoint", {
  enumerable: true,
  get: function get() {
    return common_1.consumeMultiUnitCodePoint;
  }
});
Object.defineProperty(exports, "isExoticECMAScriptWhitespace", {
  enumerable: true,
  get: function get() {
    return common_1.isExoticECMAScriptWhitespace;
  }
});
Object.defineProperty(exports, "fromCodePoint", {
  enumerable: true,
  get: function get() {
    return common_1.fromCodePoint;
  }
});
Object.defineProperty(exports, "toHex", {
  enumerable: true,
  get: function get() {
    return common_1.toHex;
  }
});
Object.defineProperty(exports, "consumeLineFeed", {
  enumerable: true,
  get: function get() {
    return common_1.consumeLineFeed;
  }
});
Object.defineProperty(exports, "scanNewLine", {
  enumerable: true,
  get: function get() {
    return common_1.scanNewLine;
  }
});
Object.defineProperty(exports, "convertTokenType", {
  enumerable: true,
  get: function get() {
    return common_1.convertTokenType;
  }
});
var charClassifier_1 = require("./charClassifier");
Object.defineProperty(exports, "CharTypes", {
  enumerable: true,
  get: function get() {
    return charClassifier_1.CharTypes;
  }
});
Object.defineProperty(exports, "isIdentifierStart", {
  enumerable: true,
  get: function get() {
    return charClassifier_1.isIdentifierStart;
  }
});
Object.defineProperty(exports, "isIdentifierPart", {
  enumerable: true,
  get: function get() {
    return charClassifier_1.isIdentifierPart;
  }
});
var identifier_1 = require("./identifier");
Object.defineProperty(exports, "scanIdentifier", {
  enumerable: true,
  get: function get() {
    return identifier_1.scanIdentifier;
  }
});
Object.defineProperty(exports, "scanIdentifierSlowCase", {
  enumerable: true,
  get: function get() {
    return identifier_1.scanIdentifierSlowCase;
  }
});
Object.defineProperty(exports, "scanUnicodeIdentifier", {
  enumerable: true,
  get: function get() {
    return identifier_1.scanUnicodeIdentifier;
  }
});
Object.defineProperty(exports, "scanPrivateIdentifier", {
  enumerable: true,
  get: function get() {
    return identifier_1.scanPrivateIdentifier;
  }
});
Object.defineProperty(exports, "scanUnicodeEscape", {
  enumerable: true,
  get: function get() {
    return identifier_1.scanUnicodeEscape;
  }
});
var string_1 = require("./string");
Object.defineProperty(exports, "scanString", {
  enumerable: true,
  get: function get() {
    return string_1.scanString;
  }
});
var numeric_1 = require("./numeric");
Object.defineProperty(exports, "scanNumber", {
  enumerable: true,
  get: function get() {
    return numeric_1.scanNumber;
  }
});
var template_1 = require("./template");
Object.defineProperty(exports, "scanTemplate", {
  enumerable: true,
  get: function get() {
    return template_1.scanTemplate;
  }
});
Object.defineProperty(exports, "scanTemplateTail", {
  enumerable: true,
  get: function get() {
    return template_1.scanTemplateTail;
  }
});
var regexp_1 = require("./regexp");
Object.defineProperty(exports, "scanRegularExpression", {
  enumerable: true,
  get: function get() {
    return regexp_1.scanRegularExpression;
  }
});