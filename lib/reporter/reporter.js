"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = report;
var _excluded = ["filepath"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var error = require('chalk').white.bgRed;
var warning = require('chalk').white.bgYellow;
var infoD = require('chalk').white.bgBlue;
var errorId = require('chalk').magentaBright;
var file = require('chalk').green;
var path = require('path');
function report(reports) {
  var sortedReports = sortReports(reports);
  // console.log(reports)
  display(sortedReports);
}
var display = function display(reports) {
  reports.forEach(function (r) {
    console.log(file(path.resolve(path.dirname('./'), r.filepath)));
    r.reports.forEach(function (r) {
      // console.log(r)
      console.log("\t".concat(r.line, ":").concat(r.col + 1, "\t").concat(r.severity == 'ERROR' ? error("  Error  \t") : "").concat(r.severity == 'WARNING' ? warning(" Warning \t") : "").concat(r.severity == 'INFO' ? infoD("  Info   \t") : "").concat(r.message, "\t").concat(errorId(r.rule_name)));
    });
    console.log("");
  });
};
function sortReports(reports) {
  // Create an object to hold reports without rule_name, using rule_name as key
  var reportsMap = {};

  // Iterate through the reports and group them by rule_name
  reports.forEach(function (report) {
    var filepath = report.filepath,
      rest = _objectWithoutProperties(report, _excluded);

    // If rule_name doesn't exist in reportsMap, add it
    if (!reportsMap[filepath]) {
      reportsMap[filepath] = [];
    }

    // Push the report without rule_name into the corresponding subarray
    reportsMap[filepath].push(rest);
  });

  // Create an array of objects with one occurrence of each rule_name
  var resultArray = Object.keys(reportsMap).map(function (filepath) {
    return {
      filepath: filepath,
      reports: reportsMap[filepath]
    };
  });
  return resultArray;
}