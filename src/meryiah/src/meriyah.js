import { parseSource } from './parser';
import * as ESTree from './estree';
import * as meta from '../../../package.json';
const version = meta.version;
export function parseScript(source, options) {
    return parseSource(source, options, 0);
}
export function parseModule(source, options) {
    return parseSource(source, options, 1024 | 2048);
}
export function parse(source, options) {
    return parseSource(source, options, 0);
}
export { ESTree, version };
//# sourceMappingURL=meriyah.js.map