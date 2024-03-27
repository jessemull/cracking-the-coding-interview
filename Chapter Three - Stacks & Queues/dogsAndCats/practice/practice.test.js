const AnimalQueue = require('./practice')
const assert = require('node:assert')
const test = require('node:test')
const {
  Animal,
  ANIMAL_TYPES
} = require('../helpers/helpers')

test(`dogsAndCats`, () => {
  const queue = new AnimalQueue()
  queue.enqueue(new Animal(ANIMAL_TYPES.CAT))
  queue.enqueue(new Animal(ANIMAL_TYPES.DOG))
  queue.enqueue(new Animal(ANIMAL_TYPES.CAT))
  const animal1 = queue.dequeue()
  const animal2 = queue.dequeue()
  const animal3 = queue.dequeue()
  assert.deepEqual(animal1.type, ANIMAL_TYPES.DOG)
  assert.deepEqual(animal2.type, ANIMAL_TYPES.CAT)
  assert.deepEqual(animal3.type, ANIMAL_TYPES.CAT)
})
