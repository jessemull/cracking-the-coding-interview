// We can use a stack and push each left paren onto the stack.
// When we see a right paren, we pop the left paren off the stack and check to see if they match.
// We need to store the parens in a map where one paren is the key and the other is the value.
// If the parens don't match or if there are leftover parens in the stack at the end we return false.

const Stack = require('../../../../Data Structures/stack')

const parens = {
  '[': ']',
  '(': ')',
  '{': '}'
}

const leftParens = Object.keys(parens)
const rightParens = Object.values(parens)

const validParens = (s) => {
  if (s === null || s === undefined || s.length > Math.pow(10, 4) || !/^[\[\]\{\}\(\)]*$/.test(s)) {
    return null
  }

  const stack = new Stack()

  for (let i = 0; i < s.length; i++) {
    if (leftParens.indexOf(s[i]) > -1) {
      stack.push(s[i])
    } else if (rightParens.indexOf(s[i] > -1)) {
      const left = stack.pop()
      const matching = parens[left]
      if (matching !== s[i]) {
        return false
      }
    }
  }

  return stack.size > 0 ? false : true
}

const main = () => {
  console.log(validParens('()'))       // true
  console.log(validParens('()[]{}'))   // true
  console.log(validParens('({[()]})')) // true
  console.log(validParens('(]'))       // false
  console.log(validParens('(a)'))      // null
}

main()