// Implement your solution here.

/***
 *
 * Given a string s, reverse the string according to the following rules:
 *
 * All the characters that are not English letters remain in the same position.
 * All the English letters (lowercase or uppercase) should be reversed.
 * Return s after reversing it.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "ab-cd"
 * Output: "dc-ba"
 * Example 2:
 *
 * Input: s = "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * Example 3:
 *
 * Input: s = "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 100
 * s consists of characters with ASCII values in the range [33, 122].
 * s does not contain '\"' or '\\'.
 *
 *
 */

// 64 < letter < 91
// 96 < letter < 123

const checkForLetter = (char) => {
  const code = char.charCodeAt(0)
  if ((64 < code && code < 91) || (96 < code && code < 123)) {
    return true
  }
  return false
}

const swap = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const reverseOnlyLetters = (str) => {
  if (!str) {
    return str
  }
  
  const arr = str.split('')
  let left = 0
  let right = arr.length - 1
  
  while (left < right) {
    // If left is a letter and right is a letter swap the chars.
    // If left is not a letter, increment left but do not decrement right.
    // If right is not a letter, decrement right but do not increment left.
    const isLeftLetter = checkForLetter(arr[left])
    const isRightLetter = checkForLetter(arr[right])
    if (isLeftLetter && isRightLetter) {
      swap(arr, left, right)
      left++
      right--
    }
    if (!isLeftLetter) {
      left++
    }
    if (!isRightLetter) {
      right--
    }
  }

  return arr.join('')
}

const main = () => {
  console.log(reverseOnlyLetters('a-bC-dEf-ghIj')) // j-Ih-gfE-dCba
  console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')) // Qedo1ct-eeLg=ntse-T!
}

main()