// Implement solution here.

const getByte = (x, y, width) => {
  const start = y * width / 8
  return start + Math.floor(x / 8)
}

const getPixel = (x) => {
  return x % 8
}

const drawLine = (screen, width, x1, x2, y) => {
  for (let i = x1; i <= x2; i++) {
    const byte = getByte(i, y, width)
    const pixel = getPixel(i)
    screen[pixel][byte] = 1
  }
  return screen
}


module.exports = drawLine