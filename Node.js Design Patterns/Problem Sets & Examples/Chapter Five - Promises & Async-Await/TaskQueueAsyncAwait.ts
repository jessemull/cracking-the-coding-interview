export type Task = () => Promise<any>

export class TaskQueueAsynAwait {
  concurrency: number
  queue: Task[]
  running: number

  constructor(concurrency: number) {
    this.concurrency = concurrency
    this.running = 0
    this.queue = []
  }

  runTask(task: () => Promise<any>) {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task()
          resolve(result)
        } catch (err) {
          reject(err)
        }
      })
      process.nextTick(this.next.bind(this))
    })
  }

  async next() {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const task = this.queue.shift() as Task
      this.running++
      await task()
      this.running--
      this.next()
    }
  }
}

const queue = new TaskQueueAsynAwait(3);

function wait(ms: number): Promise<null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms)
      resolve(null)
    }, ms)
  })
}

function taskCreator (ms: number) {
  return async function () {
    await wait(ms);
  }
}

const tasks = [taskCreator(500), taskCreator(1000), taskCreator(2000), taskCreator(750), taskCreator(3000)]

async function main() {
  await Promise.all(tasks.map(task => queue.runTask(task)))
}

main()