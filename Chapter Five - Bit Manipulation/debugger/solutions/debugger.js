/**
 * Explain what the following codes does:
 * 
 * ((n & (n - 1)) === 0)
 * 
 * To have the expression evaluate to true it means that n and n - 1 must share no ones.
 * E.g. 101 & 010 = 000 but 110 & 010 = 010.
 * 
 * When we subtract one from n, if there is a trailing one, we just remove it and we are done.
 * 
 * If we subtract one from n and there is no trailing one, we must borrow from the first one 
 * we see.
 * E.g. 101 - 1 = 100 but 110 - 1 = 101.
 * 
 * So to evaluate to true, we'd need a number where when we subtract one and borrow, it reverses
 * the ones and zeroes. This is a power of two.
 * E.g. 100 - 1 = 011 -> 100 & 011 = 0.
 */

const decimalToBinaryStr = (n) => {
  return (n >>> 0).toString(2)
}

const debug = (n) => {
  console.log(decimalToBinaryStr(n))
  const o = n - 1
  console.log(decimalToBinaryStr(o))
  const p = n & o
  console.log(decimalToBinaryStr(p))
  const q = p === 0
  console.log(q)
}

const main = () => {
  debug(5) // false
  debug(4) // true
}

main()