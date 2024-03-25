const {
  Animal,
  ANIMAL_TYPES
} = require('../helpers/helpers')

const testCases = [
  { 
    expected: [
      { method: 'enqueue', args: [new Animal(ANIMAL_TYPES.CAT)], expected: (output) => output.type === ANIMAL_TYPES.CAT },
      { method: 'enqueue', args: [new Animal(ANIMAL_TYPES.DOG)], expected: (output) => output.type === ANIMAL_TYPES.DOG },
      { method: 'enqueue', args: [new Animal(ANIMAL_TYPES.CAT)], expected: (output) => output.type === ANIMAL_TYPES.CAT },
      { method: 'dequeue', args: [], expected: (output) => output.type === ANIMAL_TYPES.DOG },
      { method: 'dequeue', args: [], expected: (output) => output.type === ANIMAL_TYPES.CAT },
      { method: 'dequeue', args: [], expected: (output) => output.type === ANIMAL_TYPES.CAT }
    ]
  }
]

module.exports = testCases