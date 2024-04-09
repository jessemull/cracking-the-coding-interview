// TODO: Add solution and test cases.

const simplifyPath = (s) => {
  if (s === undefined || s == null) {
    return s
  }
  
  const split = s.split('/')
  const stack = []
  for (let i = 0; i < split.length; i++) {
    const dir = split[i]
    if (!dir || dir === '.') {
      continue
    } else if (dir == '..') {
      stack.pop()
    } else {
      stack.push(dir)
    }
  }

  return '/' + stack.join('/')
}

const main = () => {
  console.log(simplifyPath('/a/./b/../../c/')) // /c
}

main()