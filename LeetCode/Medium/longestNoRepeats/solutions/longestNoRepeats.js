// We need to use a sliding window and at each index move another pointer along and count until we reach a repeat or the end of the string.
// At each iteration of the outer loop, we check to see if the current count is larger than max.

// 0 <= s.length <= 5 * 104

const longestNoRepeats = (s) => {
  if (s === null || s === undefined || s.length <= 0 || s.length > 5 * 104) {
    return 0
  }
  
  const split = s.split('')

  let max = 0

  for (let i = 0; i < split.length; i++) {
    let visited = new Set()
    for (let j = i; j < split.length; j++) {
      if (visited.has(split[j])) {
        break
      } else {
        visited.add(split[j])
      }
    }
    max = Math.max(visited.size, max)
  }

  return max
}

const main = () => {
  console.log(longestNoRepeats('aaaabcdeee')) // [abc, 3]
}

main()