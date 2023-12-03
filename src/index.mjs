import match from './matcher/matcher.mjs'
import parse from './parser/parser.mjs'
import getFiles from './file_traverser/file_traverser.mjs'
import extract from './extractor/extractor.mjs'
import reporter from './reporter/reporter.mjs'
import parseConfig from './utils/parsingconfig.mjs'
import getRules from './rules_parser/get_rules.mjs'
import evaluate from './matcher/evaluate.mjs'
import parseRule from './rules_parser/rules_parser.mjs'


export default function hanter(){
    const rules = getRules();
    for(let rule of rules) {
        rule = parseRule(rules)
    }
    const sourceFiles = getFiles('./test', parseConfig())
    const reports = {reports: []}
    for(let file of sourceFiles) {
        match({
            name: file,
            ast: parse(extract(file))
        }, rules, reports)
    }
    console.log(reports.reports)

}