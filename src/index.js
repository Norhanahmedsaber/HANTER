import match from './matcher/matcher.js'
import parse from './parser/parser.js'
import getFiles from './file_traverser/file_traverser.js'
import extract from './extractor/extractor.js'
import parseConfig from './utils/parsingconfig.js'
import getRules from './rules_parser/get_rules.js'

import parseRule from './rules_parser/rules_parser.js'
import report from './reporter/reporter.js'



export default function hanter(){
    const rules = getRules();
    // console.log(rules)
    for(let rule of rules) {
        rule = parseRule(rule)
    }
    // console.log(rules)
    const sourceFiles = getFiles('./', parseConfig())
    console.log(sourceFiles)
    const reports = {reports: []}
    for(let file of sourceFiles) {
        match({
            name: file,
            ast: parse(extract(file))
        }, rules, reports)
    }
    report(reports.reports)
}