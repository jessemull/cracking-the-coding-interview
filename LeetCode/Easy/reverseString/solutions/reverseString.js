/***
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 *
 * Example 1:
 *
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 *
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 10 to the power 5
 * s[i] is a printable ascii character.
 *
 *
 *
 */

// We would start one pointer at the beginning.
// Start one pointer at the end.
// Then just swap chars.
// Once the left pointer is greater than or equal to the right pointer we're done.

const reverseString = (str) => {
  if (!str) {
    return str
  }

  const arr = str.split('')
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
  return arr.join('')
}

const main = () => {
  console.log(reverseString('hello')) // olleh
}

main()