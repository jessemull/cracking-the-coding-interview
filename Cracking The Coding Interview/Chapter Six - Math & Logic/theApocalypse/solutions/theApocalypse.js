// The probability of having a boy or girl is always 1/2. It doesn't matter how many boys and girls each individual family has,
// overall we would always get an even number of boys and girls.
//
// One family may have try many times and have no girls! Other families may have one girl right away.
//
// We can see this mathematically as follows:
//
// Sequence          Probability Number of Boys Probability
// --------          ----------- --------------------------
// Girl              1/2         0
// Boy/Girl          1/4         1/4
// Boy/Boy/Girl      1/8         2/8
// Boy/Boy/Boy/Girl  1/16        3/16
//
// Sum to infinity of (i / 2^(i + 1))
//
// This goes to 1 as it approaches infinity meaning there is an equal chance.

const runOneFamily = () => {
  let boys = 0
  let girls = 0
  while (girls === 0) {
    const random = Math.round(Math.random())
    if (random === 1) {
      girls++
    } else {
      boys++
    }
  }
  return [boys, girls]
}

const runFamilies = (numFamilies = 1000000000) => {
  let boys = 0
  let girls = 0
  for (let i = 0; i < numFamilies; i++) {
    const result = runOneFamily()
    boys += result[0]
    girls += result[1]
  }
  return boys / (boys + girls)
}

const main = () => {
  console.log(runFamilies()) // 0.5
}

main()