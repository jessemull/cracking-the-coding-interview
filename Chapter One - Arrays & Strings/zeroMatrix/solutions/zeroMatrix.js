// We can iterate over the rows and columns.
// When we see a zero we know the row and column has been visited and should have zeroes so we store that information.
// At the end we just go through which rows and columns have zeros and set all numbers in the row/column to zero.

/**
 * [0, 0, 1], 
 * [0, 0, 0],
 * [0, 0, 0]
 */
const matrix1 = [
  [1, 1, 1], 
  [0, 1, 1],
  [1, 0, 1]
]

/**
 * [1, 0, 1], 
 * [0, 0, 0],
 * [1, 0, 1]
 */
const matrix2 = [
  [1, 1, 1], 
  [1, 0, 1],
  [1, 1, 1]
]

const zeroMatrix = (matrix) => {
  const rows = new Set()
  const columns = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        columns.add(j)
        continue
      }
    }
  }

  const rowsArray = Array.from(rows)
  const columnsArray = Array.from(columns)

  for (let i = 0; i < rowsArray.length; i++) {
    const row = rowsArray[i]
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0
    }
  }

  for (let i = 0; i < columnsArray.length; i++) {
    const column = columnsArray[i]
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][column] = 0
    }
  }

  return matrix
}

const printMatrix = (matrix) => {
  matrix.forEach(item => console.log(item))
}

const main = () => {
  printMatrix(zeroMatrix(matrix1))
  console.log('\n')
  printMatrix(zeroMatrix(matrix2))
}

main()