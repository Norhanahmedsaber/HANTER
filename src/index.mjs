import match from './matcher/matcher.mjs'
import parse from './parser/parser.mjs'
import getFiles from './file_traverser/file_traverser.mjs'
import extract from './extractor/extractor.mjs'
import reporter from './reporter/reporter.mjs'
import parseConfig from './utils/parsingconfig.mjs'
import getRules from './rules_parser/get_rules.mjs'

export default function hanter(){
   // const config = parseConfig()
    // console.log(config.rules)
    
    // console.log(getFiles('./src', config))
    console.log(getRules())
}