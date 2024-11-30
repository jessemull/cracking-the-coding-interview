/**
 * 1. Iterate over the string counting the number of the same char that are adjacent.
 * 2. When a new char is seen, add the char and the count to new string.
 * 3. If the length of the string is two, then the compression doesn't add anything. E.g. aa -> a2.
 * 4. Once we've compressed the string we still have to check if the compressed string is larger than the original string.
 */

const stringCompression = (str) => {
  if (!Boolean(str) || str.length <= 2) {
    return str
  }

  let compressed = ''
  let char
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (count === 0) {
        char = str[i]
        count = 1
    } else if (char !== str[i]) {
        compressed += char + count
        char = str[i]
        count = 1
    } else {
        count++
    }
  }

  compressed += char + count
  
  return compressed.length < str.length ? compressed : str
}

const main = () => {
  console.log(stringCompression('aabbccc')) // a2b2c3
  console.log(stringCompression('aa')) // aa
}

main()