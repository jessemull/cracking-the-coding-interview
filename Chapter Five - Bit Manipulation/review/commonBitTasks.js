/**
 * Returns the bit at i for input number.
 * 
 * getBit(101001, 4)
 * 
 *   101001
 * & 001000
 * --------
 *   001000
 * 
 * Output is not zero so the bit is a one.
 * 
 * getBit(101001, 3)
 * 
 *   101001
 * & 000100
 * --------
 *   000000
 * 
 * Output is not zero so the bit is a zero.
 */ 
const getBit = (num, i) => {
  return (num & (1 << i)) === 0 ? 0 : 1
}

/**
 * Sets the ith bit of the input number.
 * 
 * setBit(101001, 3)
 * 
 *   101001
 * | 000100
 * --------
 *   101101
 */
const setBit = (num, i) => {
  return num | (1 << i)
}

/**
 * Clears the ith bit of the input number.
 * 
 * clearBit(101001, 4)
 * 
 * Shift one i bits -> 001000
 * Create the mask by negatings -> 110111
 * 
 *   101001
 * & 110111
 * --------
 *   100001
 */
const clearBit = (num, i) => {
  const mask = ~(num << i)
  return num & mask
}

/**
 * Updates the ith bit of the input number.
 * 
 * updateBit(101001, 4, 0)
 * 
 * Shift one i bits -> 001000
 * Create the mask by negatings -> 110111
 * 
 * Clear the bit to update.
 * 
 *   101001
 * & 110111
 * --------
 *   100001
 * 
 * Shift the bit for updating i places -> 0000
 * 
 * Update the bit.
 * 
 *   100001
 * | 000000
 * --------
 *   100001
 */
const updateBit = (num, i, bit) => {
  const mask = ~(1 << i)
  return (num & mask) | (bit << i)
}

/**
 * The toString method of a number in Javascript accepts a base argument.
 * In order to handle negative numbers we need to remove the sign bit to
 * force the number into a unsigned integer. 
 */
const decimalToBinaryStr = (dec) => {
  return (dec >>> 0).toString(2);
}

/**
 * Often we need to iterate over each bit one by one. To iterate over
 * each bit we loop until the number is equal to zero. For each iteration
 * we do a logical AND with one to get the bit. We need to check if the bit
 * is equal to zero, if it is not, we return one. Otherwise we return zero.
 */
const iterateOverBits = (num) => {
  const bits = []
  while (num !== 0) {
    const bit = (num & 1) === 0 ? 0 : 1
    bits.push(bit)
    num = num >> 1
  }
  return bits
}
module.exports = {
  clearBit,
  decimalToBinaryStr,
  iterateOverBits,
  getBit,
  setBit,
  updateBit
}