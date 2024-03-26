const runningSum = (arr) => {
  let sum = 0
  const runningSum = []

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    runningSum.push(sum)
  }

  return runningSum
}

const main = () => {
  console.log(runningSum([1, 1, 4, 5, 7, 8, 11, 4])) // [1, 2, 6, 11, 18, 26, 37, 41]
}

main()