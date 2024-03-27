// Can check each character individually using right and left pointers.
// Make sure to remove any non-alphanumeric characters.

const isPalindrome = (str) => {
  if (!Boolean(str)) {
    return false
  }

  const alphaNumeric = str.toLowerCase().replace(/[^0-9a-zA-Z]/gi, '')

  let left = 0
  let right = alphaNumeric.length - 1
  let split = alphaNumeric.split('')

  while (left <= right) {
    if (split[left] !== split[right]) {
      return false
    } else {
      left++
      right--
    }
  }

  return true
}
  
const main = () => {
  console.log(isPalindrome('abba')) // true
  console.log(isPalindrome('daba')) // false

}

main()