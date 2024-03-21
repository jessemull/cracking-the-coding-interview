// Can store the chars in a set and then check the set.

const isUnique = (str) => {
  if (!Boolean(str)) {
    return false
  }

  const visited = new Set() 

  for (let i = 0; i < str.length - 1; i++) {
    if (visited.has(str[i])) {
      return false
    } else {
      visited.add(str[i])
    }
  }

  return true
}
  
const main = () => {
  console.log(isUnique(process.argv[2]))
}

main()

// node isUnique2.js mystring // true
// node isUnique2.js mmstring // false
  
  