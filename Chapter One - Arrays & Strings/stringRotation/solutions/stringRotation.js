// Just concatenate the second string and then hunt for the first string in the concatenated string.
// E.g. bottle, ottleb + ottlebe = ottlebottleb
//                                      ------

const stringRotation = (str1, str2) => {
  if (!Boolean(str1) || !Boolean(str2) || str1.length !== str2.length) {
    return false
  }

  const concatenated = str1 + str1
  return concatenated.indexOf(str2) > -1
}
  
const main = () => {
  console.log(stringRotation(process.argv[2], process.argv[3]))
}

main()

// node stringRotation1.js abcde deabc -> true
// node stringRotation2.js abcde deabz -> false
// node stringRotation2.js aaaaa aaaaa -> true
// node stringRotation2.js abcde bcde -> false