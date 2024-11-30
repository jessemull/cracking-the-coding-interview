// Can count all of the letters using a hash map.

const checkPermutations = (str1, str2) => {
  if (!Boolean(str1) || !Boolean(str2) || str1.length !== str2.length) {
    return false
  }

  const counts = {}

  for (let i = 0; i < str1.length; i++) {
    if (counts[str1[i]] !== undefined) {
      counts[str1[i]]++
    } else {
      counts[str1[i]] = 1
    }
    if (counts[str2[i]] !== undefined) {
      counts[str2[i]]--
    } else {
      counts[str2[i]] = -1
    }
  }

  return Object.values(counts).filter(count => count !== 0).length === 0
}

const main = () => {
  console.log(checkPermutations('fed', 'def')) // true
  console.log(checkPermutations('fed', 'den')) // false
}

main()
