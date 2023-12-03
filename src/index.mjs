import match from './matcher/matcher.mjs'
import parse from './parser/parser.mjs'
import getFiles from './file_traverser/file_traverser.mjs'
import extract from './extractor/extractor.mjs'
import reporter from './reporter/reporter.mjs'
import parseConfig from './utils/parsingconfig.mjs'
import evaluate from './matcher/evaluate.mjs'

export default function hanter(){
    const config = parseConfig()
    
    //console.log(getFiles('./src', config))

import parseRule from './rules_parser/rules_parser.mjs'

export default function hanter(){
    console.log(parseRule({
        id: 'open-never-closed',
        message: 'file $X object opened without corresponding close',
        languages: [ 'python' ],
        severity: 'ERROR',
        patterns: [
            { patterns: [ { pattern: 'x = 2' }, { pattern: null } ] },
            { 'patterns-either': [ { pattern: null }, { pattern: null } 
        ] }]}).patterns[0].patterns)
}