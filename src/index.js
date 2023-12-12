import match from './matcher/matcher.js'
import parse from './parser/parser.js'
import getFiles from './file_traverser/file_traverser.js'
import extract from './extractor/extractor.js'
import reporter from './reporter/reporter.js'
import parseConfig from './utils/parsingconfig.js'
import getRules from './rules_parser/get_rules.js'
import evaluate from './matcher/evaluate.js'

import parseRule from './rules_parser/rules_parser.js'


export default function hanter(){
    const rules = getRules();
    for(let rule of rules) {
        rule = parseRule(rules)
    }
    const sourceFiles = getFiles('./', parseConfig())
    console.log(sourceFiles)
    // const reports = {reports: []}
    // for(let file of sourceFiles) {
    //     match({
    //         name: file,
    //         ast: parse(extract(file))
    //     }, rules, reports)
    // }

    //report(Errors.error1)
}