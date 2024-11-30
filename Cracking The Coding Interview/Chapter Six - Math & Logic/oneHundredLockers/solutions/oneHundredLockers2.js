// The explanation is that each door is toggled for each factor of n.
// For example if the door is number 9 it will be toggled at 1, 3 and 9 or three times.
// Therefore, the door is open if the number of factors is odd.
// 1 -> Open, 3 -> Shut, 9 -> Open.
// This case occurs when there is a perfect square and this is why these problems matter, 
// the this programmatic solution is much more efficient.

const oneHundredLockers = (numLockers) => {
  let i = 2
  let current = 0
  let count = 0

  while(current <= numLockers) {
    current = i * i
    count++
    i++
  }

  return count
}

const main = () => {
  console.log(oneHundredLockers(100))
}

main()