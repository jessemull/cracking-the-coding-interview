import assert from 'node:assert'
import CardFactory, { RANKS, SUITS } from './CardFactory'
import test from 'node:test'

test(`CardFactory - should create a card using the default suit and ranks`, () => {
  const cardFactory = new CardFactory()
  const card = cardFactory.create(1, 1)
  assert.deepEqual(card.suit, 1)
  assert.deepEqual(card.rank, 1)
  assert.deepEqual(card.name, 'ACE of CLUBS')
})

test(`CardFactory - should return arrays of suit and rank values`, () => {
  const cardFactory = new CardFactory()
  assert.deepEqual(cardFactory.ranks, Object.keys(RANKS))
  assert.deepEqual(cardFactory.suits, Object.keys(SUITS))
})

test(`CardFactory - should calculate card position`, () => {
  const cardFactory = new CardFactory()
  const card = cardFactory.create(3, 10)
  assert.deepEqual(card.position, 36)
})

test(`CardFactory - should validate rank and suit`, () => {
  const cardFactory = new CardFactory()
  try {
    cardFactory.create(1, 100)
  } catch (err) {
    assert.deepEqual((err as Error).message, 'INVALID RANK')
  }
  try {
    cardFactory.create(100, 1)
  } catch (err) {
    assert.deepEqual((err as Error).message , 'INVALID SUIT')
  }
})
