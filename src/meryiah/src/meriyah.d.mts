import { Options } from './parser.mjs';
import * as ESTree from './estree.mjs';
export declare function parseScript(source: string, options?: Options): ESTree.Program;
export declare function parseModule(source: string, options?: Options): ESTree.Program;
export declare function parse(source: string, options?: Options): ESTree.Program;
export { Options, ESTree };
//# sourceMappingURL=meriyah.d.mts.map