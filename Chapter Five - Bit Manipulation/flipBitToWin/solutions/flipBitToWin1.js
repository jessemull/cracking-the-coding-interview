// Rather than iterating over each bit and counting first, we can just keep track of the current
// number of ones until we see a zero.
//
// If we see a zero we need to look ahead to see if the bit after the zero is a one. If it is not a one, 
// we reset the count and iterate until we find another one and start again.
//
// If it is a one, we then need to keep a second count of all the following ones for when we encounter 
// another zero.
//
// When we encounter another zero, we add up the number of ones and check it against the maximum value.
// If the number of ones is larger we set max to the new value.
// 

const decimalToBinaryStr = (dec) => {
  return (dec >>> 0).toString(2);
}

const flipBitToWin = (num) => {
  if (num === undefined || num === null) {
    return 0
  }

  // All 1's already. Javascript has no actual 32 bit integer accessible. A number max value is 2^53 - 1.

  if (num === 2147483647) {
    return 32
  }

  let max = 1
  let current = 0
  let previous = 0

  while (num !== 0) {
    const bit = (num & 1) === 0 ? 0 : 1

    if (bit === 1) {
      current++
    } else if (bit === 0) {
      const next = (num & 2) === 0 ? 0 : 1

      // I think this code is too clever. Instead of keeping track of both 
      // previous and current we set previous to current and then set current
      // to zero. Once we see two zeros we have the total count in previous plus
      // the zero in current.
      
      previous = next === 0 ? 0 : current    
      current = 0
    }

    max = Math.max(previous + current + 1, max)
    num = num >>> 1
  }
  return max
}

const main = () => {
  console.log(decimalToBinaryStr(1775))
  console.log(flipBitToWin(1775)) // 11011101111
}

main()