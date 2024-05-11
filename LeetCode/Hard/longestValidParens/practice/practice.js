// Implement solution here.

const stack = require('../../../../Data Structures/stack')

const longestValidParens = (s) => {
  const stack = new Stack()
  const max = -1
  
  for (let i = 0; i < s.length; i++) {
    if (!stack.isEmpty() && s[i] === '(') {
      const next = stack.pop()
      if (next !== ')') {
        stack.push(i)
      }
    } else {
      stack.push(i)
    }
  }


}

module.exports = longestValidParens