// This is always sort of confusing. Basically this is like those things they give kids with the rings on them.
// You have to start pushing from the stack to another stack.
// Each time you check that the other stack's last item added was less than the current one.
// If it is, just push it on the other stack.
// If it isn't, we have to move all the values that are greater than the current one back on to the initial stack.
// Then we can push the item to the other stack and it will be in order.
// Depending on the sort order the other stack or the input stack can be returned.
//
// [1, 3, 2]
// [1, 3] [2]
// [1] [2, 3]
// [3, 2] [1]
// [3, 2, 1]


const Stack = require("../../../Data Structures/stack")

const sort = (stack) => {
  const sorted = new Stack()
  while (!stack.isEmpty()) {
    let next = stack.pop()
    if (!sorted.isEmpty() && sorted.peek() <= next) {
      sorted.push(next)
    } else {
      while (!sorted.isEmpty() && sorted.peek() > next) {
        stack.push(sorted.pop())
      }
      sorted.push(next)
    }
  }
  return sorted
}

const main = () => {
  console.log(sort(new Stack([1, 3, 2, 5, 7, 100, 23, 51, 6, 4, 4])))
}

main()
