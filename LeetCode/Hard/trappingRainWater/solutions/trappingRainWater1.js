const trappingRainWater = (heights) => {
  let left = []
  let leftMax = -1

  for (let i = 0 ; i < heights.length; i++) {
    leftMax = Math.max(leftMax, heights[i])
    left[i] = leftMax
  }

  let right = []
  let rightMax = -1

  for (let i = heights.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, heights[i])
    right[i] = rightMax
  }

  let sum = 0

  for (let i = 0; i < heights.length; i++) {
    sum += Math.min(left[i], right[i]) - heights[i]
  }

  return sum
}

const main = () => {
  console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
}

main()