import fs from 'fs'

type Callback = (err?: Error, data?: any) => void

const concatFiles = (files: string[], dest: string, cb: Callback) => {
  const concatFile = (index: number): void => {
    if (index === files.length) {
      return cb()
    }
    const file = files[index]
    fs.readFile(file, (err, data) => {
      if (err) {
        cb(err)
      }
      fs.writeFile(dest, data, {flag: 'a+'}, (err) => {
        if (err) {
          cb(err)
        }
        concatFile(index + 1)
      })
    })
  }
  concatFile(0)
}

concatFiles(['input1.txt', 'input2.txt'], 'result.txt', (err) => console.log(err ? err : 'Success!'))