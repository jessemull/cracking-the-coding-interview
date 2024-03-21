// Can sort and check for the same two characters in a row.

const isUnique = (str) => {
  if (!Boolean(str)) {
    return false
  }

  const sorted = str.split('').sort()

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return false
    }
  }

  return true
}

const main = () => {
  console.log(isUnique(process.argv[2]))
}

main()

// node isUnique1.js mystring // true
// node isUnique2.js mmstring // false

