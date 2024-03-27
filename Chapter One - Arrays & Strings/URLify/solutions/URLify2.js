// Can iterate over the string and splice in the characters.

const urlify = (str) => {
  if (!Boolean(str)) {
    return str
  }

  const split = str.split('')

  for (let i = 0; i < split.length; i++) {
    if (split[i] === ' ') {
      split.splice(i, 1, '%20')
    }
  }

  return split.join('')
}
  
const main = () => {
  console.log(urlify('Replace spaces with ampersands and stuff!')) // Replace%20spaces%20with%20ampersands%20and%20stuff!
}

main()