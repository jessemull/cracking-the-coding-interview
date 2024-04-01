// Create a mask for the even bits with alternating ones and zeroes e.g. 101010.
// Create a mask for the odd bits with alternationing ones and zeroes e.g. 010101.
// Use a logical AND to swap the even bits.
// Use a logical AND to swap the odd bits.
// Take both results and do a logical OR to combine them.

const decimalToBinaryStr = (num) => {
  return (num >>> 0).toString(2)
}

const pairwiseSwap = (num) => {
  const even = '10'
  const odd = '01'

  let evenMaskStr = ''
  let oddMaskStr = ''

  while (evenMaskStr.length < 32) {
    evenMaskStr += even
    oddMaskStr += odd
  }

  const evenMask = parseInt(evenMaskStr, 2)
  const oddMask = parseInt(oddMaskStr, 2)

  return ((num & evenMask) >>> 1) | ((num & oddMask) << 1)
}

const main = () => {
  const num = 10                 // 1010
  console.log(pairwiseSwap(num)) // 0101 -> 5
}

main()