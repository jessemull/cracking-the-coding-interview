// This is similar to valid parens but we have to keep track of the indices.
// The trick is to push the indices at each end of the valid parens onto the stack.
// We don't actually keep track of the lengths or the valid parens, we find the indices at the edges.
// Then at the end we iterate over the stack and calculate the maximum length.

// Create a stack.
// Iterate over each charater in the string.
// If the character is a left paren, we push i onto the stack.
// If the character is a right paren and the stack is empty it is invalid and we push the index onto the stack.
// If the character is a right paren and there is no matching left paren pushed onto the stack, it is invalid and we push the index onto the stack.
// If the charater is a right paren and there is a matching left paren, we've found a valid match and we pop off the index of the left paren.

// Once we've iterated through each character, we then iterate over the stack.
// We set the last seen value to the length of the array. We have to do this because there could be a case where all the valid parens are at the end e.g. ')()()'.
// We then find the maximum length by checking our result against the last value minus the next value on the stack minus one.
// At the end, we have to compare last and the result to handle the other case where all the valid parens are at the beginning e.g. '()()('

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

const main = () => {
  console.log(longestValidParens(')()())')) // 4
}

main()