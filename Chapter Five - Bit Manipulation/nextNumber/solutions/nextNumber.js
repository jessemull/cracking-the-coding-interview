const decimalToBinaryStr = (dec) => {
  return (dec >>> 0).toString(2);
}

const getNextBit = (num) => {
  return (num & 1) === 0 ? 0 : 1
}

const setBit = (num, i) => {
  return num | (1 << i)
}

// Flip the right most non-trailing zero (p).
// Count the number of ones are to the right of p.
// Clear all the ones to the right of p.
// Add back count - 1 ones to the end of the number.

const getNextLarger = (num) => {
  let currentBit = num
  let countZeroes = 0
  let countOnes = 0

  // Count all the trailing zeroes.

  while (currentBit !== 0 && getNextBit(currentBit) !== 1) {
    countZeroes++
    currentBit = currentBit >>> 1
  }

  // Count the subsequent ones.

  while (currentBit !== 0 && getNextBit(currentBit) !== 0) {
    countOnes++
    currentBit = currentBit >>> 1
  }

  const bitToFlip = countZeroes + countOnes

  num = setBit(num, bitToFlip)

  const a = 1 << bitToFlip // Get a one followed by all zeroes.
  const b = a - 1          // Subtracting one will provide a zero followed by all ones.
  const mask = ~b          // Negating will leave it so that we have all ones followed by bitToFlip zeroes.
  num = num & mask         // Clear rightmost bits.

  // Insert one fewer ones than we counted.

  const c = 1 << (countOnes - 1) // Get a one followed by the number of zeroes equal to one less than the one count.
  const d = c - 1                // Subtracting one will flip things so we now have a zero followed by the right number of ones.
  num = num | d                  // Logical OR will add the ones back.

  return num
}

// Flip the right most non-trailing one.
// Clear all the bits to the right of the flipped bit.
// Add one to the number of trailing ones and set them immediatley right of the flipped bit.

const getNextSmaller = (num) => {
  let currentBit = num
  let countOnes = 0
  let countZeroes = 0

  while (currentBit !== 0 && getNextBit(currentBit) === 1) {
    countOnes++
    currentBit = currentBit >>> 1
  }

  while (currentBit !== 0 && getNextBit(currentBit) === 0) {
    countZeroes++
    currentBit = currentBit >>> 1
  }

  const bitToFlip = countOnes + countZeroes

  let a = ~0                   // Get all ones.
  let b = a << (bitToFlip + 1) // Ones followed by p + 1 zeroes.
  num = num & b                // Clears bits zero through p.

  let c = 1 << (countOnes + 1)   // Zeroes with a one at position ones count plus one.
  let d = c - 1                  // Zeroes followed by ones count plus one ones.
  let e = d << (countZeroes - 1) // Ones count plus one ones followed by zero count minus one zeroes.
  num = num | e

  return num
}

const nextNumber = (num) => {
  const larger = getNextLarger(num)
  const smaller = getNextSmaller(num)
  return [smaller, larger]
}

const main = () => {
  const num = 13948                                        // 11011001111100
  const result = nextNumber(num)            
  console.log(result)
  console.log(result.map(num => decimalToBinaryStr(num)))  // [11011001111010, 11011010001111]
}

main()