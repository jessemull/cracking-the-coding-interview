/**
 * Given a string s of lowercase letters, we need to find the longest substring length that contains (a, e, i, o, u) only. 
 * Examples : 
 * 
 * Input: s = "geeksforgeeks"
 * Output: 2
 * Longest substring is "ee"
 * 
 * Input: s = "theeare"
 * Output: 3
 * Longest substring is "eea"
 */

// Iterate over the string one char at a time.
// Set vowelLength to zero.
// Set maxVowelLength to zero.
// If we find a vowel, increment the vowelLength.
// If we find a consonant, check if vowelLength is greater than maxVowelLength.
// If vowelLength is greater than maxVowelLength, set maxVowelLength to vowelLength.
// Set vowelLength to zero.
// Return maxVowelLength.

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const isVowel = (char) => vowels.includes(char)

const longestVowelSubstring = (str) => {
  let vowelLength = 0
  let maxVowelLength = 0
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (isVowel(arr[i])) {
      vowelLength += 1
    } else {
      if (vowelLength > maxVowelLength) {
        maxVowelLength = vowelLength
      }
      vowelLength = 0
    }
  }
  return maxVowelLength
}

const main = () => {
  console.log(longestVowelSubstring('geeksforgeeks')) // 2
  console.log(longestVowelSubstring('theeare')) // 3
}

main()