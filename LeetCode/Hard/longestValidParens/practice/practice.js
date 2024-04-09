// Implement solution here.

const Stack = require('../../../../Data Structures/stack')

const longestValidParens = (s) => {
  if (s === null || s === undefined || s.length > Math.pow(10, 4) || !/^[\[\]\{\}\(\)]*$/.test(s)) {
    return null
  }

  const stack = new Stack()

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char === '(') {
      stack.push(i)
    } else {
      if (!stack.isEmpty() && s[stack.peek()] === '(') {
        stack.pop()
      } else {
        stack.push(i)
      }
    }
  }

  let result = 0
  let last = s.length

  while(!stack.isEmpty()) {
    let next = stack.pop()
    result = Math.max(result, last - next - 1)
    last = next
  }

  result = Math.max(result, last)

  return result
}

module.exports = longestValidParens