// Can create a set from the string and eliminate duplicates and then compare lengths.

const isUnique = (str) => {
  if (!Boolean(str)) {
    return false
  }

  const set = new Set(str.split(''))

  return set.size === str.length
}
  
const main = () => {
  console.log(isUnique(process.argv[2]))
}

main()

// node isUnique2.js mystring // true
// node isUnique2.js mmstring // false
  
  