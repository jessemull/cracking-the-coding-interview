// We don't need to merge the arrays, we just need to treat them like they are already merged.
// This is a two-pointer problem, one pointer for each array.
// We add the lengths of the two arrays to get the total length.
// We divide the length by two to get the index of the median.
// We then iterate over both arrays until we reach the median.
// At each iteration we check which array has the lesser value, we then increment that pointer.
// Once we reach the median index, if the combined length of both arrays is odd we just return the value.
// If it is even, we add the two values together and divide by two.

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const getAdjacent = (first, second) => {
  if (second == undefined || first <= second) {
    return first
  }
  return second
}

const medianOfTwoArrays = (nums1, nums2) => {
  if (
    nums1 === null || 
    nums2 === null || 
    nums1 === undefined || 
    nums2 === undefined || 
    nums1.length < 0 || 
    nums2.length < 0 || 
    nums1.length > 1000 || 
    nums2.length > 1000
  ) {
    return null
  }

  const totalLength = nums1.length + nums2.length
  const medianIndex = Math.floor(totalLength / 2)

  // The total length is even, we return the value at the median index.
  // If the total length is odd, we return the average of the two values at medianIndex and medianIndex + 1.

  if (totalLength % 2 !== 0) {
    let ptr1 = 0
    let ptr2 = 0
    let median = -1
    for (let i = 0; i <= medianIndex; i++) {
      const num1 = nums1[ptr1]
      const num2 = nums2[ptr2]
      if (num2 === undefined || num1 <= num2) {
        median = nums1[ptr1]
        ptr1++
      } else {
        median = nums2[ptr2]
        ptr2++
      }
    }
    return median
  } else {
    let ptr1 = 0
    let ptr2 = 0
    let median = -1
    for (let i = 0; i <= medianIndex - 1; i++) {
      const num1 = nums1[ptr1]
      const num2 = nums2[ptr2]
      if (num2 === undefined || num1 <= num2) {
        median = (nums1[ptr1] + getAdjacent(nums1[ptr1 + 1], nums2[ptr2])) / 2
        ptr1++
      } else {
        median = (nums2[ptr2] + getAdjacent(nums1[ptr1], nums2[ptr2 + 1])) / 2
        ptr2++
      }
    }
    return median
  }
}

const main = () => {
  console.log(medianOfTwoArrays([1, 3], [2, 4])) // 2.5
}

main()