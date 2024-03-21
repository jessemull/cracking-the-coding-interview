const input = [
  { input: ['bumblebee', 'beebumble'], expected: true },
  { input: ['bumblebee', 'betbumble'], expected: false },
  { input: ['bumblebee', null], expected: false },
  { input: [null, 'betbumble'], expected: false },
  { input: ['bumblebee', undefined], expected: false },
  { input: [undefined, 'betbumble'], expected: false },
  { input: [], expected: false },
]

module.exports = input