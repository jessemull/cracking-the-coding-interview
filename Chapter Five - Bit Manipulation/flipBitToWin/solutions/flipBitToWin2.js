// We can count all of the ones and zeroes and push the counts into an array.
// Every other number will be a count of zero or one respectively.
// Once we have all the counts, we iterate over them and when we find a zero count of one, 
// we consider the counts on either side to find the largest.

const decimalToBinaryStr = (dec) => {
  return (dec >>> 0).toString(2);
}

const getCounts = (num) => {
  const counts = [0]
  let last = 0
  while (num !== 0) {
    const bit = (num & 1) === 0 ? 0 : 1
    if (last === bit) {
      counts[counts.length - 1]++
    } else {
      last = bit
      counts.push(1)
    }
    num = num >> 1
  }
  return counts
}

const flipBitToWin = (num) => {
  if (num === undefined || num === null) {
    return 0
  }
  
  // All 1's already.

  if (num === 2147483647) {
    return 32
  }

  const counts = getCounts(num)

  let ptr = 0
  let zero = true
  let max = 1
  while (ptr < counts.length) {
    if (zero && counts[ptr] === 1) {
      const left = counts[ptr - 1] !== undefined ? counts[ptr - 1] : 0
      const right = counts[ptr + 1] !== undefined ? counts[ptr + 1] : 0
      const total = left + right + 1
      if (total > max) {
        max = total
      }
    } else if (zero && counts[ptr] > 1) {
      const total = 2
      if (total > max) {
        max = total
      }
    }
    ptr++
    zero = !zero
  }
  return max
}

const main = () => {
  console.log(decimalToBinaryStr(91775))
  console.log(flipBitToWin(1775)) // 11011101111
}

main()
