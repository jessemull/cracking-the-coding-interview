class TaskQueuePC {
  constructor (concurrency) {
    this.taskQueue = []
    this.consumerQueue = []
    for (let i = 0; i < concurrency; i++) {
      this.consumer()
    }
  }

  consumer () {
    return new Promise((resolve, reject) => {
      const execute = () => {
        this.getNextTask()
          .then(task => task())
          .then(() => execute())
          .catch(error => reject(error))
      }
      execute()
    })
  }

  getNextTask () {
    return new Promise((resolve) => {
      if (this.taskQueue.length !== 0) {
        return resolve(this.taskQueue.shift())
      }
      this.consumerQueue.push(resolve)
    })
  }

  runTask (task) {
    return new Promise((resolve, reject) => {
      const taskWrapper = () => {
        const taskPromise = task()
        taskPromise.then(resolve, reject)
        return taskPromise
      }
      if (this.consumerQueue.length !== 0) {
        const consumer = this.consumerQueue.shift()
        consumer(taskWrapper)
      } else {
        this.taskQueue.push(taskWrapper)
      }
    })
  }
}

const queue = new TaskQueuePC(3);

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms)
      resolve(null)
    }, ms)
  })
}

function taskCreator (ms) {
  return async function () {
    await wait(ms);
  }
}

const tasks = [taskCreator(500), taskCreator(1000), taskCreator(2000), taskCreator(750), taskCreator(3000)]

async function main() {
  await Promise.all(tasks.map(task => queue.runTask(task)))
}

main()