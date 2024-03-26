const trappingRainWater = (heights) => {
  if (!heights || heights.length === 0) {
    return null
  }

  let left = 0
  let right = heights.length - 1
  let sum = 0
  let leftMax = heights[left]
  let rightMax = heights[right]

  while (left <= right) {
    leftMax = Math.max(heights[left], leftMax)
    rightMax = Math.max(heights[right], rightMax)
    if (leftMax < rightMax) {
      sum += leftMax - heights[left]
      left++
    } else {
      sum += rightMax - heights[right]
      right--
    }
  }

  return sum
}

const main = () => {
  console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
}

main()