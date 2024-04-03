const assert = require('node:assert')
const longestNoRepeats = require('./practice')
const test = require('node:test')

test('poison - []', () => {
  const output = longestNoRepeats()
  assert.deepEqual(output, 'bbbbb')
})
