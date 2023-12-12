const fs = require('fs')
module.exports =  function extract(filePath) {
  try {
    let data = fs.readFileSync(filePath, 'utf-8');
    return data;
  } catch (err) {
    // our error
    console.log(err);
  }
}