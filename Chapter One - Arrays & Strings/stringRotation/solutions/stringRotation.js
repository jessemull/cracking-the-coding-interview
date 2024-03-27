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
  console.log(stringRotation('abcde', 'deabc')) // true
  console.log(stringRotation('abcde', 'deabz')) // false
}

main()