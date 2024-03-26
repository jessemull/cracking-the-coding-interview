const runningSum = (arr) => {
  const runningSum = []

  for (let i = 0; i < arr.length; i++) {
    runningSum.push(runningSum[i - 1] ? runningSum[i - 1] + arr[i] : arr[i])
  }

  return runningSum
}

const main = () => {
  console.log(runningSum([1, 1, 4, 5, 7, 8, 11, 4])) // [1, 2, 6, 11, 18, 26, 37, 41]
}

main()