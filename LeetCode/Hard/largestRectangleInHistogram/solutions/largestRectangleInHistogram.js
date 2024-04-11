// Brute force approach is to iterate over each bar in the histogram and then expand outwards checking if the next bar is less than the current one.
// If it is less, we stop and calculate the area and store the maximum value.

// Here we use a stack.
// Iterate over the histogram in a while loop and increment the index into the histogram.
// When we encounter a larger bar in the histogram or the stack is empty, we push the index (not the value) onto the stack.
// We will need both the index and the value later to calculate the width and height.
// We continue along the histogram until we encounter another bar that is larger than the last pushed onto the stack.
// At this point, we calculate the area using the last index on the stack.
// Pop off the index from the stack and calculate the height which is the value at that index.
// If the stack is empty, the width is the current index. If there is another item in the stack, we peek at the top value and then subtract it from the current index minus one.
// Compare the area to the maximum area and set the new max if applicable.
// At the end, if there are items on the stack, we must also calculate the area and compare.
// Here the width of the histogram minus the last item on the stack minus one is the width. 
// By being clever and just incrementing an index in a while loop we can calculate the area EXACTLY the same as before.
// Make sure to use the current index as the width if the stack is empty.

const Stack = require('../../../../Data Structures/stack')

const largestRectangleInHistogram = (histogram) => {
  const stack = new Stack()
  let max = -1
  let index = 0

  while (index < histogram.length) {
    if (stack.isEmpty() || histogram[stack.peek()] <= histogram[index]) {
      stack.push(index++)
    } else {
      const next = stack.pop()
      const height = histogram[next]
      const width = stack.isEmpty() ? index : (index - stack.peek() - 1)
      max = Math.max(max, height * width)
    }
  }

  while (!stack.isEmpty()) {
    const next = stack.pop()
    const height = histogram[next]
    const width = stack.isEmpty() ? index : (index - stack.peek() - 1)
    max = Math.max(max, height * width)
  }

  return max
}

const main = () => {
  console.log(largestRectangleInHistogram([2,4])) // 4
}

main()