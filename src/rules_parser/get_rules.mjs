import getFiles from "../file_traverser/file_traverser.mjs"
import fs from 'fs'
import yaml from 'js-yaml'

export default function getRules()
{   let rulesJson = []
    const rules = getFiles('./rules',{extensions:["yml"] , ignoredPatterns:[]})
    rules.forEach(rule => {
        const ruleJson = ymlToJson(rule)
        if(ruleJson)
        {
            rulesJson.push(ruleJson)
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