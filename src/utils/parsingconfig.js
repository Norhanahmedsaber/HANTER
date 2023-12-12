import extract from "../extractor/extractor.js";

export default function parseConfig() {
    const config = extract('./hanterconfig.json')
    return JSON.parse(config)
}