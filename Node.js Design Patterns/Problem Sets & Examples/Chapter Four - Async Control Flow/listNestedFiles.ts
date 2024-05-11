import fs from 'fs'
import path from 'path'

type Callback = (err?: Error | null, files?: string[]) => void 

const listNestedFiles = (dir: string, cb: Callback): void => {
  let fileList: string[] = []
  fs.readdir(dir, { withFileTypes: true}, (err, files) => {
    if (err) {
      return cb(err)
    }
    let pending = files.length
    if (pending <= 0) {
      return cb(null, fileList)
    }
    files.forEach(file => {
      if (file.isDirectory()) {
        listNestedFiles(path.resolve(file.path, file.name), (err, data = []) => {
          fileList = [...fileList, ...data]
          if (--pending === 0) {
            return cb(null, fileList)
          }
        })
      } else {
        fileList.push(file.name)
        if (--pending === 0) {
          return cb(null, fileList)
        }
      }
    })
  })
}

listNestedFiles('./example', (err, files) => console.log(files))