import match from './matcher/matcher.mjs'
import parse from './parser/parser.mjs'
import getFiles from './file_traverser/file_traverser.mjs'
import extract from './extractor/extractor.mjs'
export default function hanter(){
    console.log(getFiles('./src//meryiah'))
}