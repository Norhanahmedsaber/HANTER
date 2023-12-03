import fs from 'fs';
import yaml from 'js-yaml';

export default function convertRuleToLogicObject(yamlFilePath) {
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
