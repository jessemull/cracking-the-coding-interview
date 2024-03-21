/**
 * 1. Transpose the matrix.
 * 2. Reverse each row.
 * 
 * Remember to only visit half the matrix when transposing. Visiting all of the data will result in swapping twice,
 * resulting in the same array.
 * 
 * To swap only half, check if the column is less than the row or vice-versa depending on a clockwise or counter clockwise rotation.
 * 
 * To rotate clockwise, reverse and then transpose.
 * 
 * To rotate counter-clockwise, transpose and then reverse.
 */

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const swap = (matrix, row, column) => {
  let temp = matrix[row][column]
  matrix[row][column] = matrix[column][row]
  matrix[column][row] = temp
}

const transpose = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < row; column++) {
      swap(matrix, row, column)
    }
  }
  return matrix
}

const reverse = (matrix) => {
  return matrix.map(row => row.reverse())
}

const rotateMatrix = (matrix) => {
  return transpose(reverse(matrix))
}

const printMatrix = (matrix) => {
  matrix.forEach(row => console.log(row))
}

const main = () => {
  console.log(printMatrix(rotateMatrix(matrix1)))
}

main()