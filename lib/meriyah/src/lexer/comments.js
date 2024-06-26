"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipMultiLineComment = exports.skipSingleLineComment = exports.skipSingleHTMLComment = exports.skipHashBang = exports.CommentTypes = void 0;
var common_1 = require("./common");
var charClassifier_1 = require("./charClassifier");
var errors_1 = require("../errors");
exports.CommentTypes = ['SingleLine', 'MultiLine', 'HTMLOpen', 'HTMLClose', 'HashbangComment'];
function skipHashBang(parser) {
  var source = parser.source;
  if (parser.currentChar === 35 && source.charCodeAt(parser.index + 1) === 33) {
    (0, common_1.advanceChar)(parser);
    (0, common_1.advanceChar)(parser);
    skipSingleLineComment(parser, source, 0, 4, parser.tokenPos, parser.linePos, parser.colPos);
  }
}
exports.skipHashBang = skipHashBang;
function skipSingleHTMLComment(parser, source, state, context, type, start, line, column) {
  if (context & 2048) (0, errors_1.report)(parser, 0);
  return skipSingleLineComment(parser, source, state, type, start, line, column);
}
exports.skipSingleHTMLComment = skipSingleHTMLComment;
function skipSingleLineComment(parser, source, state, type, start, line, column) {
  var index = parser.index;
  parser.tokenPos = parser.index;
  parser.linePos = parser.line;
  parser.colPos = parser.column;
  while (parser.index < parser.end) {
    if (charClassifier_1.CharTypes[parser.currentChar] & 8) {
      var isCR = parser.currentChar === 13;
      (0, common_1.scanNewLine)(parser);
      if (isCR && parser.index < parser.end && parser.currentChar === 10) parser.currentChar = source.charCodeAt(++parser.index);
      break;
    } else if ((parser.currentChar ^ 8232) <= 1) {
      (0, common_1.scanNewLine)(parser);
      break;
    }
    (0, common_1.advanceChar)(parser);
    parser.tokenPos = parser.index;
    parser.linePos = parser.line;
    parser.colPos = parser.column;
  }
  if (parser.onComment) {
    var loc = {
      start: {
        line: line,
        column: column
      },
      end: {
        line: parser.linePos,
        column: parser.colPos
      }
    };
    parser.onComment(exports.CommentTypes[type & 0xff], source.slice(index, parser.tokenPos), start, parser.tokenPos, loc);
  }
  return state | 1;
}
exports.skipSingleLineComment = skipSingleLineComment;
function skipMultiLineComment(parser, source, state) {
  var index = parser.index;
  while (parser.index < parser.end) {
    if (parser.currentChar < 0x2b) {
      var skippedOneAsterisk = false;
      while (parser.currentChar === 42) {
        if (!skippedOneAsterisk) {
          state &= ~4;
          skippedOneAsterisk = true;
        }
        if ((0, common_1.advanceChar)(parser) === 47) {
          (0, common_1.advanceChar)(parser);
          if (parser.onComment) {
            var loc = {
              start: {
                line: parser.linePos,
                column: parser.colPos
              },
              end: {
                line: parser.line,
                column: parser.column
              }
            };
            parser.onComment(exports.CommentTypes[1 & 0xff], source.slice(index, parser.index - 2), index - 2, parser.index, loc);
          }
          parser.tokenPos = parser.index;
          parser.linePos = parser.line;
          parser.colPos = parser.column;
          return state;
        }
      }
      if (skippedOneAsterisk) {
        continue;
      }
      if (charClassifier_1.CharTypes[parser.currentChar] & 8) {
        if (parser.currentChar === 13) {
          state |= 1 | 4;
          (0, common_1.scanNewLine)(parser);
        } else {
          (0, common_1.consumeLineFeed)(parser, state);
          state = state & ~4 | 1;
        }
      } else {
        (0, common_1.advanceChar)(parser);
      }
    } else if ((parser.currentChar ^ 8232) <= 1) {
      state = state & ~4 | 1;
      (0, common_1.scanNewLine)(parser);
    } else {
      state &= ~4;
      (0, common_1.advanceChar)(parser);
    }
  }
  (0, errors_1.report)(parser, 16);
}
exports.skipMultiLineComment = skipMultiLineComment;