// A positive integer can be decomposed into a product of primes.
// In order for x to be divisible by y all primes in x's prime factorization must exist in y's factorization.

// The naive way is to just iterate from 2 -> n - 1 and check for divisibility.

const checkForPrimality = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// We can improve quite a bit by checking from 2 -> square root of n.
// This is because for all the numbers less than the square root of n there exists a compliment greater than the square root of n.
// In other words by going from 2 -> n -1 we check for a number AND it's compliment which we don't need to do.

const checkForPrimalityOptimized = (num) => {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

// To generate a list of prime numbers we can use The Sieve of Eratosthenes^TM. 
// Start with a list of number from 1 to n.
// Divide all numbers by two and cross off or remove any that are divisible.
// Then find the next non-crossed off or removed number in the list which is the next prime.
// Repeat by dividing by the next prime and crossing off more numbers.
// Do not get confused when to use the index and when to use the value. The index is the actual number to check for primality.
// Use the trick from above, only checking up to the square root of max.
// When crossing off primes, we can set the initial index to prime * prime.
// Iterate when crossing off by the prime.

const crossOffNonPrimes = (prime, flags) => {
  for (let i = prime * prime; i < flags.length; i += prime) {
    if (i % prime === 0) {
      flags[i] = false
    }
  }
  return flags
}

const findNextPrime = (prime, flags) => {
  for (let i = prime + 1; i < flags.length; i++) {
    if (flags[i]) {
      return i
    }
  }
  return prime + 1
}


const sieveOfEratosthenes = (max) => {
  if (max === null || max === undefined) {
    return []
  }

  // Generate the list of numbers.

  let flags = []
  for (let i = 0; i <= max; i++) {
    flags.push(true)
  }


  // Start at 2.

  let prime = 2

  // Cross off non-primes that are divisible by two and then find the next prime in the list and repeat.

  while (prime <= Math.sqrt(max)) {
    flags = crossOffNonPrimes(prime, flags)
    prime = findNextPrime(prime, flags)
    console.log(flags, prime)
  }

  // For testing purposes it is easier to return the numbers rather than flags.

  const result = []

  for (let i = 0; i <= flags.length; i++) {
    if (flags[i]) {
      result.push(i)
    }
  }

  return result
}

const main = () => {
  console.log(checkForPrimality(13))          // true
  console.log(checkForPrimality(8))           // false
  console.log(checkForPrimalityOptimized(31)) // true
  console.log(checkForPrimalityOptimized(26)) // false
  console.log(sieveOfEratosthenes(10))        // [0, 1, 2, 3, 5, 7]
}

main()