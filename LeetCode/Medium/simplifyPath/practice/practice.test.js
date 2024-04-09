const assert = require('node:assert')
const simplifyPath = require('./practice')
const test = require('node:test')

test(`simplifyPath - [/home//foo/]`, () => {
  const output = simplifyPath('/home//foo/')
  assert.deepEqual(output, '/home/foo')
})

test(`simplifyPath - [/../]`, () => {
  const output = simplifyPath('/../')
  assert.deepEqual(output, '/')
})

test(`simplifyPath - [/home/]`, () => {
  const output = simplifyPath('/home/')
  assert.deepEqual(output, '/home')
})

test(`simplifyPath - [/a/./b/../../c/]`, () => {
  const output = simplifyPath('/a/./b/../../c/')
  assert.deepEqual(output, '/c')
})