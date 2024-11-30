// We need to get the bits from the first number and then update the bits in the second number.
//
// To get a bit at the ith index we shift one by the index and then do a logical AND with the input
// number.
//
// To update a bit, we first clear the bit by shifting one by the index and negating it to create a mask.
// We then do a logical OR to clear the big. 
//
// After clearing the bit, we set it by shifting the bit value we'd like to set by the index and the 
// performing a logical OR between the input number with the cleared bit and the shifted value.
//
// A better approach may be to just clear all the bits between the indices, then shift the second number
// i places and do a logical OR. Then we don't have to loop through all the bits one by one to set them.
//
// Remember also to check if the indices are inside the bounds of a 32-bit integer.

const clearBit = (num, i) => {
  const mask = ~(1 << i)
  return num & mask
}

const insertion = (num1, num2, startIndex, endIndex) => {
  if (startIndex > endIndex || startIndex < 0 || endIndex > 32) {
    return 0
  }
  for (let i = startIndex; i < endIndex; i++) {
    num1 = clearBit(num1, i)
  }
  const shifted = num2 << startIndex
  return num1 | shifted
}

const main = () => {
  const num1 = 1024 // 10000000000
  const num2 = 19   // 10011
  console.log(insertion(num1, num2, 2, 6)) // 1100
}

main()