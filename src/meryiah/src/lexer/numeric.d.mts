import { ParserState, Context } from '../common.mjs';
import { Token } from '../token.mjs';
import { NumberKind } from './common.mjs';
export declare function scanNumber(parser: ParserState, context: Context, kind: NumberKind): Token;
export declare function scanDecimalDigitsOrSeparator(parser: ParserState, char: number): string;
//# sourceMappingURL=numeric.d.mts.map