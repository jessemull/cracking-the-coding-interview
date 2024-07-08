async function promiseAll(promises: Promise<any>[]): Promise<any[]> {
  let completed = 0
  let results: any[] = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(result => {
          completed++
          results[i] = result
          if (completed === promises.length) {
            resolve(results)
          }
        })
        .catch(err => reject(err))
    }
  })
}

function wait(ms: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms)
      resolve(ms)
    }, ms)
  })
}

const promises = [wait(2000), wait(1000), wait(4000), wait(3000)]

async function main() {
  const result: any[] = await promiseAll(promises)
  console.log(result)
}

main()