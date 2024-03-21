// Can count all the chars and make sure they match using a set or hash map.

const oneAway = (str1, str2) => {
  if (str1 === undefined || str2 === undefined || str1 === null || str2 === null) {
    return false
  }

  const longest = str1.length > str2.length ? str1.split('') : str2.split('')
  const shortest = str1.length > str2.length ? str2.split('') : str1.split('')

  // If the lengths are different and removing one char doesn't work then they are more than one edit away.

  if (longest.length !== shortest.length && longest.length - 1 !== shortest.length) {
    return false
  }

  // Now we can iterate over both strings and check for the total number of edits.

  let ptr1 = 0
  let ptr2 = 0
  let edits = 0

  const equalLength = shortest.length === longest.length 
  
  while (ptr1 < longest.length && ptr2 < shortest.length) {
    // If the characters don't match, we increment the number of edits.

    if (longest[ptr1] !== shortest[ptr2]) {
      // Exit if there is more than one edit.

      if (++edits > 1) {
        return false
      }

      // Increment the pointer for the first string to the next char.

      ptr1++

      // If the strings are equal we move both pointers.

      if (equalLength) {
        ptr2++
      }
    } else {
      // If the characters match, there are no edits and we increment both pointers.

      ptr1++
      ptr2++
    }
    
  }

  return true
}
  
  const main = () => {
    console.log(oneAway(process.argv[2], process.argv[3]))
  }
  
  main()
  
  // node oneAway.js abba abb -> true
  // node oneAway.js abba abca -> true
  // node oneAway.js abba ab -> false
  // node oneAway.js abba acca -> false