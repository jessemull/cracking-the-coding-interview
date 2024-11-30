// Can sort and compare equality.

const checkPermutations = (str1, str2) => {
  if (!Boolean(str1) || !Boolean(str2) || str1.length !== str2.length) {
    return false
  }
  
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
  
const main = () => {
  console.log(checkPermutations('fed', 'def')) // true
  console.log(checkPermutations('fed', 'den')) // false
}

main()