import { ParserState, Context } from '../common.mjs';
import { Token } from '../token.mjs';
export declare function scanIdentifier(parser: ParserState, context: Context, isValidAsKeyword: 0 | 1): Token;
export declare function scanMetaVariable(parser: ParserState, context: Context, isValidAsKeyword: 0 | 1): Token;
export declare function scanUnicodeIdentifier(parser: ParserState, context: Context): Token;
export declare function scanMetaVariableSlowCase(parser: ParserState, context: Context, hasEscape: 0 | 1, isValidAsKeyword: number): Token;
export declare function scanIdentifierSlowCase(parser: ParserState, context: Context, hasEscape: 0 | 1, isValidAsKeyword: number): Token;
export declare function scanPrivateIdentifier(parser: ParserState): Token;
export declare function scanIdentifierUnicodeEscape(parser: ParserState): number;
export declare function scanUnicodeEscape(parser: ParserState): number;
//# sourceMappingURL=identifier.d.mts.map