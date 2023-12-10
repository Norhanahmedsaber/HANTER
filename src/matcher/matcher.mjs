import parseRule from "../rules_parser/rules_parser.mjs"
import AbstractSyntaxTree from 'abstract-syntax-tree'
import evaluate from "./evaluate.mjs"
import matchTypes from './matchingAlgorithms.mjs'
export default function match(file, rules, reports) {
    for(let rule of rules) {
        matchRule(file, rule, reports)
    }
}

function matchRule({name:fileName, ast}, rule, reports) {
    const logicBlock = createLogicContainer(rule, ast)
    console.log(rule.id, evaluate(logicBlock))
}

function matchPattern(ast, pattern) {

    // Add Check to pattern-not 
    const targetednNode = pattern.pattern.body[0]
    let match = false
    AbstractSyntaxTree.walk(ast, (node) => {
        if(node.type === targetednNode.type) {
            if(matchTypes[targetednNode.type](targetednNode, node)) {
                match = true
            }
        }
    })
    return match
}
function report(fileName, info, reports) {
    if(reports.reports[fileName]) {
        reports.reports[fileName].push(info)
    }else {
        reports.reports[fileName] = [info]
    }
}

function createLogicContainer(rule, ast) {
    return processPattern(rule.patterns, ast);
}

function processPattern(patterns, ast) {
    if (!patterns) return null;

    // Single pattern case
    if (!Array.isArray(patterns)) {
        return convertSinglePattern(patterns, ast);
    }

    // Multiple patterns, handle recursively
    const logicObject = { type: 'AND', value: [] };
    patterns.forEach(pattern => {
        if (pattern['pattern-either']) {
            // For pattern-either, use OR logic
            logicObject.value.push({
                type: 'OR',
                value: pattern['pattern-either'].map(p => convertSinglePattern(p, ast))
            });
        } else {
            // For other patterns, handle them individually
            const result = processPattern(pattern, ast);
            if (result) logicObject.value.push(result);
        }
    });

    return logicObject.value.length === 1 ? logicObject.value[0] : logicObject;
}

function convertSinglePattern(pattern, ast) {
    if (pattern.pattern) {
        return { type: 'pattern', value: matchPattern(ast, pattern) }; // Placeholder for actual pattern match
    } else if (pattern['pattern-not']) {
        return { type: 'pattern', value: !matchPattern(ast, pattern) }; // Placeholder for pattern not match
    }
    // Add more conditions here for other pattern types like pattern-inside, pattern-regex, etc.
}
