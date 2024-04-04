// We iterate through each character and then use two pointers to radiate outwards and check for palindromes.
// We need to store the actual string. At each iteration we check against the previous longest.
// We need to handle two cases, one where the substring is even and one where it is odd.
// There are a couple important key things that make this problem easier. We should not try to keep track of the
// substring itself in any way, just the start and the length to make things easier.
// At each iteration, just expand using (1) the index to the left and index to the right and (2) the index and the
// index to the right. Anything else makes things difficult because we aren't sure how to increment the pointers correctly.
// If we calculate the length by just subtracting the two pointers each time we also don't need to do things like keep
// track of a separate count etc.

// 1 <= s.length <= 1000


const longestPalindromicSubstring = (s) => {
  if (s === null || s === undefined || s.length > 1000 || s.length < 1) {
    return ''
  }

  const split = s.split('')

  let start = 0
  let maxLength = 1

  const getPalindrome = (left, right) => {
    while (left >= 0 && right < split.length && split[left] === split[right]) {
      let currentLength = right - left + 1
      if (currentLength > maxLength) {
        maxLength = currentLength
        start = left
      }
      left--
      right++
    }
  }

  // Check each letter one at a time and expand outwards to find the longest palindrome possible from that position.

  for (let i = 0; i < s.length; i++) {
    getPalindrome(i, i + 1)
    getPalindrome(i - 1, i + 1)
  }

  return split.slice(start, start + maxLength).join('')
}

const main = () => {
  console.log(longestPalindromicSubstring('abccal'))
}

main()