// For fractional values we cannot just grab the bits and shift the number.
// A fractional number in base ten looks like 0.101 => 1 * 1/10 + 0 * 1/10^2 + 1 * 1/10^3.
// A fractional number in base two looks like 0.101 -> 1 * 1/2 + 0 * 1/2^2 + 1 * 1/2^3.
// At each step we increment the power by one (see above).
// We then calculate the fractional value to multiply our digit by.
// If the number is greating or equal to the fractional value, we add a one and subtract the value.
// Otherwise we add a zero.
// Increment the number of bits.
// If there are more than 32 bits we return an error message.

const binaryToString = (num) => {
  if (num === undefined || num === null) {
    return ''
  }

  let n = 1          // The number of bits.
  let str = '0.'     // Begin with the zero and a period.
  let power = 0      // Set power initially to zero so incrementing is easy in our while loop.
  let multiplier = 0 // This is the number we will check against.
  
  while (n <= 32 && num > 0) {
    power++
    multiplier = 1 / Math.pow(2, power)
    if (num >= multiplier) {
      str += 1
      num -= multiplier;
    } else {
      str += 0
    }
    n++
  }
  
  if (n === 33 && number > 0) {
    return 'ERROR'
  }

  return str
}

const main = () => {
  console.log(binaryToString(0.72))  // 0.10111000010100011110101110000101
  console.log(binaryToString(0.143)) // 0.00100100100110111010010111100011
}

main()