const error = require('chalk').white.bgRed
const warning = require('chalk').white.bgYellow
const infoD = require('chalk').white.bgBlue
const errorId = require('chalk').magentaBright
const file = require('chalk').green
const path = require('path')
export default function report(reports) {
    const sortedReports = sortReports(reports)
    // console.log(reports)
    display(sortedReports)
}
const display = (reports) => {
    reports.forEach((r) => {
        console.log(file(path.resolve(path.dirname('./'), r.filepath)))
        r.reports.forEach((r) => {
            // console.log(r)
            console.log(`\t${r.line}:${r.col+1}\t${r.severity=='ERROR'?error("  Error  \t"):""}${r.severity=='WARNING'?warning(" Warning \t"):""}${r.severity=='INFO'?infoD("  Info   \t"):""}${r.message}\t${errorId(r.rule_name)}`)
        })
        console.log("")
    })
}
function sortReports(reports) {

    // Create an object to hold reports without rule_name, using rule_name as key
    const reportsMap = {};
  
    // Iterate through the reports and group them by rule_name
    reports.forEach((report) => {
        const { filepath, ...rest } = report;
  
        // If rule_name doesn't exist in reportsMap, add it
        if (!reportsMap[filepath]) {
            reportsMap[filepath] = [];
  
        }
  
        // Push the report without rule_name into the corresponding subarray
        reportsMap[filepath].push(rest);
    });
  
    // Create an array of objects with one occurrence of each rule_name
    const resultArray = Object.keys(reportsMap).map((filepath) => {
        return {
            filepath,
            reports: reportsMap[filepath],
        };
    });
  
    return resultArray;
  }
