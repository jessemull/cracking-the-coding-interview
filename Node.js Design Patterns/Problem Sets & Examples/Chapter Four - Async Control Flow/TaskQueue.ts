import { EventEmitter } from 'events'

export type Callback = (err: Error | null, data: any) => void
export type Task = (cb: Callback) => void

export class TaskQueue extends EventEmitter {
  concurrency: number
  queue: Task[]
  running: number

  constructor(concurrency: number) {
    super()
    this.concurrency = concurrency
    this.running = 0
    this.queue = []
  }

  pushTask(task: Task) {
    this.queue.push(task)
    process.nextTick(this.next.bind(this))
    return this
  }

  next() {
    if (this.running === 0 && this.queue.length === 0) {
      return this.emit('empty')
    }

    while (this.running < this.concurrency && this.queue.length > 0) {
      const task = this.queue.shift() as Task
      task((err) => {
        if (err) {
          this.emit('error', err)
        }
        this.running--
        process.nextTick(this.next.bind(this))
      })
      this.running++
    }
  }
}