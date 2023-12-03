import parseRule from "../rules_parser/rules_parser.mjs"
import abstract from 'abstract-syntax-tree'
const {walk} = abstract
export default function match(file, rules, reports) {
    for(let rule of rules) {
        matchRule(file, rule, reports)
    }
}

function matchRule({name:fileName, ast}, rule, reports) {
    const results = {
        type: "AND",
        value: []
    }
}

function matchPattern(ast, pattern) {

}
function report(fileName, info, reports) {
    if(reports.reports[fileName]) {
        reports.reports[fileName].push(info)
    }else {
        reports.reports[fileName] = [info]
    }
}