// Can just code it up! We get a result of 10.

const openAllLockers = (numLockers) => {
  const lockers = []
  for (let i = 0; i < numLockers; i++) {
    lockers.push(true)
  }
  return lockers
}

const toggleLockers = (lockers, increment) => {
  for (let i = increment - 1; i <= lockers.length; i = i + increment) {
    lockers[i] = !lockers[i]
  }
  return lockers
}

const oneHundredLockers = (numLockers) => {
  let lockers = openAllLockers(numLockers)

  for (let i = 2; i <= numLockers; i++) {
    lockers = toggleLockers(lockers, i)
  }

  return lockers.filter(locker => locker).length
}

const main = () => {
  console.log(oneHundredLockers(100))
}

main()

