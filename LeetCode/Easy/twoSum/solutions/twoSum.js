// Use a hash map to store the difference.
// Make the key the current value and value the current index.
// For each number check if the difference exists in the hash map.
// If it exists we've found the answer.
// If it doesn't exist store the difference.

const twoSum = (nums, target) => {
  // Check that the args are defined and we are within the bounds set by the problem.

  if (
    nums === null || 
    nums === undefined || 
    target === null || 
    target === undefined ||
    nums.length < 2 ||
    nums.length > Math.pow(10, 9) ||
    target > Number.MAX_SAFE_INTEGER ||
    target < Number.MIN_SAFE_INTEGER
  ) {
    return null
  }

  const differences = {}

  for (let i = 0; i < nums.length; i++) {
    
    // Check that the current number is within the bounds of the problem.

    if (nums[i] > Math.pow(10, 9) || nums[i] < Math.pow(-10, 9)) {
      return null
    }

    // Calculate the difference.

    const difference = target - nums[i]

    // If the difference exists, we are done. Return the indices.
    // Otherwise store the value and its index.

    if (differences[difference] !== undefined) {
      return [i, differences[difference]]
    } else {
      differences[nums[i]] = i
    }
  }

  // No solution exists.
  
  return null
}

const main = () => {
  console.log(twoSum([2,7,11,15], 9)) // [1. 0]
}

main()