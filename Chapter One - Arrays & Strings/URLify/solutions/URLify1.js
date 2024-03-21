// Can just use a regex and Javascript replace method. Can also use the replaceAll method with a string regex.

const urlify = async (str) => {
  if (!Boolean(str)) {
    return str
  }

  return str.replace(/ /gi, '%20')
}

const main = () => {
  console.log(urlify(pr))
}

main()

// node URLify1.js "Replace spaces with ampersands and stuff!" -> Replace%20spaces%20with%20ampersands%20and%20stuff!