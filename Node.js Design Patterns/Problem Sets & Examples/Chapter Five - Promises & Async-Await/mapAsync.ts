async function mapAsync(iterable: any[], callback: (result: any) => any, concurrency: number) {
    const queue: any = []
    let running = 0
  
    function runTask (task: () => Promise<void>) {
      return new Promise((resolve, reject) => {
        queue.push(() => {
          return task().then(resolve, reject)
        })
        process.nextTick(next)
      })
    }
  
    function next () {
      while (running < concurrency && queue.length) {
        const task = queue.shift()
        task().finally(() => {
          running--
          next()
        })
        running++
      }
    }

    return await Promise.all(iterable.map(item => runTask(() => callback(item))))
}

function wait(ms: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms)
      resolve(ms)
    }, ms)
  })
}
  
function taskCreator (ms: number) {
  return async function () {
    await wait(ms);
  }
}

const tasks = [500, 1000, 2000, 1500, 450]

async function callback(item: any): Promise<string> {
   const result = await wait(item)
   return `Processed: ${result}`
}

async function main() {
  const result = await mapAsync(tasks, callback, 3)
  console.log(result)
}

main()