import { Token } from '../token.mjs';
import { ParserState, Context } from '../common.mjs';
import { LexerState } from './common.mjs';
export declare const TokenLookup: Token[];
export declare function nextToken(parser: ParserState, context: Context): void;
export declare function scanSingleToken(parser: ParserState, context: Context, state: LexerState): Token;
//# sourceMappingURL=scan.d.mts.map