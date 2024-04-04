// Implement solution here.

const getPalindrome = (str, startIndex) => {
  let ptr1 = startIndex
  let ptr2 = startIndex
  let palindrome = str[startIndex]

  const right = str[startIndex + 1]
  const left = str[startIndex - 1]
  const start = str[startIndex]

  // If all the middle letters are the same we need to get to the edge because there could be an even or odd number.

  if (start === right) {
    while(str[++ptr2] === start && ptr2 < str.length) {
      palindrome = palindrome + str[ptr2]
    }
  }

  if (start === left) {
    while(str[--ptr1] === start && ptr1 >= 0) {
      palindrome = str[ptr2] + palindrome
    }
  }

  // Then just expand outwards until we encounter a mismatch.

  while (str[--ptr1] === str[++ptr2] && ptr1 >= 0 && ptr2 < str.length) {
    palindrome = str[ptr1] + palindrome + str[ptr2]
  }

  return palindrome
}

const longestPalindromicSubstring = (s) => {
  if (s === null || s === undefined || s.length > 1000 || s.length < 1) {
    return ''
  }

  const split = s.split('')

  let longest = ''

  // Check each letter one at a time and expand outwards to find the longest palindrome possible from that position.
  
  for (let i = 0; i < s.length; i++) {
    const palindrome = getPalindrome(split, i)
    longest = palindrome.length > longest.length ? palindrome : longest
  }

  return longest
}

module.exports = longestPalindromicSubstring