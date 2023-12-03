import extract from "../extractor/extractor.mjs";

export default function parseConfig() {
    const config = extract('hanterconfig.json')
    //console.log(config)
    return JSON.parse(config)
}