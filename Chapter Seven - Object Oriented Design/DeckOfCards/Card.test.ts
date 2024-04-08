import assert from 'node:assert'
import Card from './Card'
import test from 'node:test'

test(`Card - should create card with suit, rank, position and name`, () => {
  const name = 'ACE of SPADES'
  const card = new Card(1, 2, 3, name)
  assert.deepEqual(card.suit, 1)
  assert.deepEqual(card.rank, 2)
  assert.deepEqual(card.position, 3)
  assert.deepEqual(card.name, name)
})

test(`Card - toString should return name`, () => {
  const name = 'ACE of SPADES'
  const card = new Card(1, 2, 3, name)
  assert.deepEqual(card.toString(), name)
})