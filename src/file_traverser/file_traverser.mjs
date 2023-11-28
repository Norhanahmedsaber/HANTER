import fs from 'fs'
import path from 'path'
export default function getFiles(dirPath) {
    const dirname = path.resolve(path.dirname('./'), dirPath)
    if(!fs.existsSync(dirname)) {
        return []
    }
    const files = fs.readdirSync(dirname)
    let filePaths = []
    for (let file in files){
      filePaths.push(path.join(dirPath, files[file]))
      if(fs.statSync(path.join(dirname, files[file])).isDirectory()) {
        filePaths = filePaths.concat(getFiles(path.join(dirPath, files[file])))
      }
    }
    return filePaths         
}