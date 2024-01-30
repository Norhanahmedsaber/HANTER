export default function reporter(reports) {
    console.log(SortReportsByFile(reports))
    console.log(formatReports(SortReportsByFile(reports)))
}

function SortReportsByFile(reports) {
    // Create an object to hold subarrays based on filepath
    const filePathMap = {};
  
    // Iterate through the reports and group them by filepath
    reports.forEach((report) => {
      const { filepath } = report;
      if (!filePathMap[filepath]) {
        filePathMap[filepath] = [];
      }
      filePathMap[filepath].push(report);
    });
  
    // Sort each subarray by line in ascending order
    for (const filepath in filePathMap) {
      filePathMap[filepath].sort((a, b) => a.line - b.line);
    }
  
    // Return an array of subarrays
    return Object.values(filePathMap);
}

function formatReports(reports) {
    const formattedOutput = [];

    reports.forEach((subarray) => {
        if (subarray.length > 0) {
        const filepath = subarray[0].filepath;
        const fileReports = subarray.map((report) => {
            return `${report.filepath} (${report.line}:${report.col}) - ${report.rule_name}`;
        });

        formattedOutput.push(`${filepath}\n${fileReports.join('\n')}`);
        }
    });

    return formattedOutput.join('\n\n');
}
  

  
