import EventEmitter from 'events'
import { readFile } from 'fs'

class FindRegex extends EventEmitter {
  files: string[]
  regex: RegExp

  constructor(regex: RegExp, files?: string[]) {
    super()
    this.regex = regex
    this.files = files || []
  }

  addFile(file: string) {
    this.files.push(file)
    return this
  }

  find() {
    process.nextTick(() => this.emit('filelist', this.files))
    for (const file of this.files) {
      readFile(file, 'utf8', (err, data) => {
        if (err) {
          this.emit('error', err)
        }

        this.emit('fileread', file)

        const match = data.match(this.regex)

        if (match) {
          match.forEach(elem => this.emit('found', file, elem))
        }

       
      })
    }
    return this
  }
}

const main = async () => {
  const finder = new FindRegex(/big.*boy/gi)
  finder
    .addFile('regex1.txt')
    .addFile('regex2.txt')
    .find()
    .on('filelist', (filelist) => console.log(filelist))
    .on('found', (file, match) => console.log(file, match))
    .on('error', (err) => console.log('Error: ' + err))
}

main()