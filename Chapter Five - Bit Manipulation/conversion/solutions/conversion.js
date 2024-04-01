// We just need to count every position where the bits differ.
// If the two bits differ than an XOR operation will return a one.
// If the tow bits are the same, the XOR operation returns a zero.
// We can just XOR the entire number and then count all the 1's.

const conversion = (num1, num2) => {
  let XOR = num1 ^ num2
  let count = 0
  while (XOR !== 0) {
    const bit = (XOR & 1) === 0 ? 0 : 1
    if (bit === 1) {
      count++
    }
    XOR = XOR >>> 1
  }
  return count
}

const main = () => {
  const num1 = 19                     // 10011
  const num2 = 23                     // 10111
  console.log(conversion(num1, num2)) // 1
}

main()