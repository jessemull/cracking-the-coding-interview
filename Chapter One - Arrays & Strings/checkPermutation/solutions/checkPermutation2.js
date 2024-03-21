// Can sort and compare equality.

const checkPermutations = (str1, str2) => {
  if (!Boolean(str1) || !Boolean(str2) || str1.length !== str2.length) {
    return false
  }
  
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
  
const main = () => {
    console.log(checkPermutations(process.argv[2], process.argv[3]))
}

main()
  
// node checkPermutation fed def -> true
// node checkPermutation fed den -> false