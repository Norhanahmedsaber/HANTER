import match from './matcher/matcher.mjs'
import parse from './parser/parser.mjs'
import getFiles from './file_traverser/file_traverser.mjs'
import extract from './extractor/extractor.mjs'
import reporter from './reporter/reporter.mjs'
import parseConfig from './utils/parsingconfig.mjs'
import evaluate from './matcher/evaluate.mjs'

export default function hanter(){
    const config = parseConfig()
    
    //console.log(getFiles('./src', config))

}