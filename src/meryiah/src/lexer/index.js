export { scanSingleToken, nextToken, TokenLookup } from './scan.js';
export { skipMultiLineComment, skipSingleLineComment, skipHashBang, skipSingleHTMLComment } from './comments.js';
export { advanceChar, consumeMultiUnitCodePoint, isExoticECMAScriptWhitespace, fromCodePoint, toHex, consumeLineFeed, scanNewLine, convertTokenType } from './common.js';
export { CharTypes, isIdentifierStart, isIdentifierPart } from './charClassifier.js';
export { scanIdentifier, scanIdentifierSlowCase, scanUnicodeIdentifier, scanPrivateIdentifier, scanUnicodeEscape } from './identifier.js';
export { scanString } from './string.js';
export { scanNumber } from './numeric.js';
export { scanTemplate, scanTemplateTail } from './template.js';
export { scanRegularExpression } from './regexp.js';
//# sourceMappingURL=index.mjs.map