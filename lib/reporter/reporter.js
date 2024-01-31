"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reporter;
function reporter(reports) {
  console.log(SortReportsByFile(reports));
  console.log(formatReports(SortReportsByFile(reports)));
}
function SortReportsByFile(reports) {
  // Create an object to hold subarrays based on filepath
  var filePathMap = {};

  // Iterate through the reports and group them by filepath
  reports.forEach(function (report) {
    var filepath = report.filepath;
    if (!filePathMap[filepath]) {
      filePathMap[filepath] = [];
    }
    filePathMap[filepath].push(report);
  });

  // Sort each subarray by line in ascending order
  for (var filepath in filePathMap) {
    filePathMap[filepath].sort(function (a, b) {
      return a.line - b.line;
    });
  }

  // Return an array of subarrays
  return Object.values(filePathMap);
}
function formatReports(reports) {
  var formattedOutput = [];
  reports.forEach(function (subarray) {
    if (subarray.length > 0) {
      var filepath = subarray[0].filepath;
      var fileReports = subarray.map(function (report) {
        return "".concat(report.filepath, " (").concat(report.line, ":").concat(report.col, ") - ").concat(report.rule_name);
      });
      formattedOutput.push("".concat(filepath, "\n").concat(fileReports.join('\n')));
    }
  });
  return formattedOutput.join('\n\n');
}