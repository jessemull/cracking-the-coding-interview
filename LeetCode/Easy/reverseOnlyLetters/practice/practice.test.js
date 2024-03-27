const assert = require('node:assert')
const reverseOnlyLetters = require('./practice')
const test = require('node:test')

test(`reverseOnlyLetters - a-bC-dEf-ghIj`, () => {
  const output = reverseOnlyLetters('a-bC-dEf-ghIj')
  assert.deepEqual(output, 'j-Ih-gfE-dCba')
})

test(`reverseOnlyLetters - hannah`, () => {
  const output = reverseOnlyLetters('Test1ng-Leet=code-Q!')
  assert.deepEqual(output, 'Qedo1ct-eeLg=ntse-T!')
})