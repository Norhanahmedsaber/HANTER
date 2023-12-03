import { Console } from "console"
import getFiles from "../file_traverser/file_traverser.mjs"
import fs from 'fs'
import yaml from 'js-yaml'

export default function getRules()
{   let rulesJson = []
    const rules = getFiles('./rules',{extensions:["yml"] , ignoredPatterns:[]})
    rules.forEach(rule => {
        console.log(rule)
        rulesJson.push(ymlToJson(rule))
    });
    return rulesJson
}


function ymlToJson(ymlPath)
{
    try{
        const ruleFile = fs.readFileSync(ymlPath)
        const ruleJson = yaml.load(ruleFile)
        return ruleJson
    }
    catch(error){
        console.error(error)
    }
}