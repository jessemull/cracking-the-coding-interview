import fs from 'fs'
import path from 'path'
import { Callback, TaskQueue } from './TaskQueue'

const matches: string[] = []
const queue = new TaskQueue(5)

queue
  .on('error', (err) => console.log(err))
  .on('empty', () => console.log('Done!', matches))
  .pushTask((done: Callback) => {
    processDirectory('example', /hello/gi, done)
  })


const processDirectory = (dir: string, regex: RegExp, callback: Callback) => {
  fs.readdir(dir, { withFileTypes: true}, (err, files) => {
    if (err) {
      callback(err, null)
    }

    files.forEach(file => {
      const filePath = path.join(dir, file.name)
      if (file.isDirectory()) {
        queue.pushTask((done) => {
          processDirectory(filePath, regex, done)
        })
      } else {
        queue.pushTask((done) => {
          processFileForMatch(filePath, regex, done)
        })
      }
    })

    return callback(null, null)
  })
}

const processFileForMatch = (file: string, regex: RegExp, callback: Callback) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err, null)
    }

    const match = data.match(regex)

    if (match) {
      matches.push(path.basename(file))
    }

    return callback(null, null)
  })
}