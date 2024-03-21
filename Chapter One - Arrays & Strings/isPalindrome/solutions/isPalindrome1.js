// Can just reverse the string and check if it is equal to the original string.
// Make sure to remove any non-alphanumeric characters.

const isPalindrome = (str) => {
  if (!Boolean(str)) {
    return false
  }

  let alphaNumeric = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
  let reversed = alphaNumeric.split('').reverse().join('')

  return  reversed === alphaNumeric
}

const main = () => {
  console.log(isPalindrome(process.argv[2], process.argv[3]))
}

main()

// node isPalindrome1.js abba baba -> true
// node isPalindrome2.js abba daba -> false