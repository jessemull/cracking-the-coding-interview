// We need to load balance the worst case.
// To load balance a system we want the total number of drop between the two eggs to be the same.
// If the first egg takes one more step, the second egg should take one less step.
// X + (X - 1) + (X - 2) ... + 1 = 100
// X(X + 1) / 2 = 100
// X = 14

// I feel like a tricky part of this problem is incrementing the drop count correctly. It must be incremented even if the while loop doesn't run.
// Maybe a do while loop would be better.

let dropCount = 0

const drop = (floor, breakingPoint) => {
  dropCount++
  return floor >= breakingPoint
}

const eggDropProblem = (breakingPoint, numFloors) => {
  if (breakingPoint > numFloors) {
    return -1
  }

  let interval = 14
  let previous = 0
  let egg1 = interval

  // Try dropping and incrementing until the egg breaks.

  while (!drop(egg1, breakingPoint) && egg1 <= numFloors) {
    interval -= 1
    previous = egg1
    egg1 += interval
  }

  // The egg broke so go back to the last successful drop.
  // We already dropped it at this floor so go to the next one.

  let egg2 = previous + 1

  // This simulates that drop so also increment the drop count.

  while (egg2 < egg1 && egg2 <= numFloors && !drop(egg2, breakingPoint)) {
    egg2++
  }

  return dropCount
}

const main = () => {
  console.log(eggDropProblem(15, 100)) // 14, 27, 39
}

main()