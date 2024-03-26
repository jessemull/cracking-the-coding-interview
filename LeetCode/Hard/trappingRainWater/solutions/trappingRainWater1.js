const trappingRainWater = (height) => {
  if (!height || height.length === 0) {
    return null
  }

  let left = 0
  let right = height.length - 1
  let sum = 0
  let leftMax = height[left]
  let rightMax = height[right]

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(height[left], leftMax)
      sum += leftMax - height[++left]
    } else {
      rightMax = Math.max(height[right], rightMax)
      sum += rightMax - height[++right]
    }
  }

  return sum
}

const main = () => {
  console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
}

main()