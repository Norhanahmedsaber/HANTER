export default function evaluate(logicObject) {
    // Base case: if the type is 'pattern', return the value directly
    if (logicObject.type === 'pattern') {
        return logicObject.value;
    }

    // Recursive case: evaluate each element in the 'value' array
    const evaluatedValues = logicObject.value.map(evaluate);

    // Apply the logic gate operation
    if (logicObject.type === 'AND') {
        return evaluatedValues.every(Boolean);
    } else if (logicObject.type === 'OR') {
        return evaluatedValues.some(Boolean);
    } else {
        throw new Error(`Unknown logic gate type: ${logicObject.type}`);
    }
}

// // Example usage
// const x= {
//     type: 'AND',
//     value: [
//         { type: 'OR', value: [
//             { type: 'pattern', value: false },
//             { type: 'AND', value: [
//                 { type: 'pattern', value: true },
//                 { type: 'OR', value: [
//                     { type: 'pattern', value: false },
//                     { type: 'pattern', value: true }
//                 ]}
//             ]}
//         ]},
//         { type: 'OR', value: [
//             { type: 'pattern', value: false },
//             { type: 'AND', value: [
//                 { type: 'pattern', value: true },
//                 { type: 'pattern', value: false }
//             ]}
//         ]},
//         { type: 'AND', value: [
//             { type: 'pattern', value: true },
//             { type: 'pattern', value: true },
//             { type: 'OR', value: [
//                 { type: 'pattern', value: false },
//                 { type: 'pattern', value: true }
//             ]}
//         ]}
//     ]
// };

// const result = evaluate(x);
// console.log('Result:', result); 









import fs from 'fs';
import yaml from 'js-yaml';

function convertRuleToLogicObject(yamlFilePath) {
    const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
    const parsedYaml = yaml.load(yamlContent);
    //console.log(parsedYaml)
    const rule = parsedYaml.rules[0];
    return ruleToObject(rule);
}

function ruleToObject(rule) {
    return processPattern(rule.patterns);
}

function processPattern(patterns) {
    if (!patterns) return null;

    // Single pattern case
    if (!Array.isArray(patterns)) {
        return convertSinglePattern(patterns);
    }

    // Multiple patterns, handle recursively
    const logicObject = { type: 'AND', value: [] };
    patterns.forEach(pattern => {
        if (pattern['pattern-either']) {
            // For pattern-either, use OR logic
            logicObject.value.push({
                type: 'OR',
                value: pattern['pattern-either'].map(p => convertSinglePattern(p))
            });
        } else {
            // For other patterns, handle them individually
            const result = processPattern(pattern);
            if (result) logicObject.value.push(result);
        }
    });

    return logicObject.value.length === 1 ? logicObject.value[0] : logicObject;
}

function convertSinglePattern(pattern) {
    if (pattern.pattern) {
        return { type: 'pattern', value: true }; // Placeholder for actual pattern match
    } else if (pattern['pattern-not']) {
        return { type: 'pattern', value: false }; // Placeholder for pattern not match
    }
    // Add more conditions here for other pattern types like pattern-inside, pattern-regex, etc.
}

// Example usage
const logicObject = convertRuleToLogicObject('rules/rule1.yml');
console.log(logicObject);
