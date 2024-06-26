import getFiles from "../file_traverser/file_traverser.js"
import fs from 'fs'
import yaml from 'js-yaml'
import parseConfig from "../utils/parsingconfig.js"
import path from 'path'
export default function getRules()
{   
    let rulesJson = []
    const config = parseConfig()
    const rulesFiles = getFiles('./node_modules/hanter/rules',{extensions:["yml"] , ignoredDirs:config.exculdeRulesDirs, ignoredPatterns:[]})
    rulesFiles.forEach(rule => {
        if(!isRuleContained(rule , config.exculdeRules)){
            const ruleJson = ymlToJson(rule)
            if(ruleJson)
            {
                rulesJson.push(ruleJson)
            }
        }
    });
    return rulesJson
}


function ymlToJson(ymlPath)
{
    try{
        const ruleFile = fs.readFileSync(ymlPath , 'utf-8')
        const ruleJson = yaml.load(ruleFile)
        return ruleJson
    }
    catch(error){
        console.error(`Error processing ${ymlPath}: ${error.message || error}`);
        return null;      
    }
}

function isRuleContained(rule, configRules) {
   const ruleName = path.basename(rule)
    return configRules.includes(ruleName)
}