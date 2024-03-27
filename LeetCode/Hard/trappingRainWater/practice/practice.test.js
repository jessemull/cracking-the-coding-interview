const assert = require('node:assert')
const trappingRainWater = require('./practice')
const test = require('node:test')

test(`trappingRainWater - [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]`, () => {
  const output = trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
  assert.deepEqual(output, 6)
})