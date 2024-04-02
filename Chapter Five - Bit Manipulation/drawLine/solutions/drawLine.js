// It seems like there is no way to do this correctly in Javascript but we can just
// use the brute force approach that is mentioned NOT to do...

// 8 x 8 Screen

const screen = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0,0], 
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]

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

const main = () => {
  const result = drawLine(screen, 16, 4, 12, 1)
  result.map(row => console.log(JSON.stringify(row)))
}

main()
