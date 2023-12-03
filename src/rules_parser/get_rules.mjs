import getFiles from "../file_traverser/file_traverser.mjs"
import fs from 'fs'
import yaml from 'js-yaml'
import parseConfig from "../utils/parsingconfig.mjs"
import path from 'path'
export default function getRules()
{   
    let rulesJson = []
    const config = parseConfig()
    console.log(config.exculdeRulesDirs)
    const rulesFiles = getFiles('./rules',{extensions:["yml"] , ignoredPatterns:config.exculdeRulesDirs})
     rulesFiles.forEach(rule => {
       if(!isRuleContained(rule , config.exculdeRules)){
            const ruleJson = ymlToJson(rule)
            if(ruleJson)
            {
                rulesJson.push(ruleJson.rules[0])
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