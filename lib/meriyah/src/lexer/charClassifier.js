"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierPart = exports.isIdentifierStart = exports.isIdPart = exports.isIdStart = exports.CharTypes = void 0;
var unicode_1 = require("../unicode");
exports.CharTypes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 | 1024, 0, 0, 8 | 2048, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 1 | 2, 0, 0, 8192, 0, 0, 0, 256, 0, 256 | 32768, 0, 0, 2 | 16 | 128 | 32 | 64, 2 | 16 | 128 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 32 | 64, 2 | 16 | 512 | 64, 2 | 16 | 512 | 64, 0, 0, 16384, 0, 0, 0, 0, 1 | 2 | 64, 1 | 2 | 64, 1 | 2 | 64, 1 | 2 | 64, 1 | 2 | 64, 1 | 2 | 64, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 1 | 2, 0, 1, 0, 0, 1 | 2 | 4096, 0, 1 | 2 | 4 | 64, 1 | 2 | 4 | 64, 1 | 2 | 4 | 64, 1 | 2 | 4 | 64, 1 | 2 | 4 | 64, 1 | 2 | 4 | 64, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 1 | 2 | 4, 16384, 0, 0, 0, 0];
exports.isIdStart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
exports.isIdPart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
function isIdentifierStart(code) {
  return code <= 0x7F ? exports.isIdStart[code] : unicode_1.unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1;
}
exports.isIdentifierStart = isIdentifierStart;
function isIdentifierPart(code) {
  return code <= 0x7F ? exports.isIdPart[code] : unicode_1.unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1 || code === 8204 || code === 8205;
}
exports.isIdentifierPart = isIdentifierPart;