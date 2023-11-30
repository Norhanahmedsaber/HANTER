import extract from "../extractor/extractor.mjs";

export default function parseConfig() {
    const config = extract('../../hanterconfig.json')
    return JSON.parse(config)
}