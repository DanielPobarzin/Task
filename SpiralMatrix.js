/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    const SpiralMatrix = []

    while (matrix.length > 0) {
      SpiralMatrix.push(...matrix.shift())
      for (let element of matrix) {
        SpiralMatrix.push(element.pop())
      }
      if (matrix.length > 0) {
        SpiralMatrix.push(...matrix.pop().reverse())
      }
      for (let i = matrix.length - 1; i >= 0; i--) {
        SpiralMatrix.push(matrix[i].shift())
      }
    } 
    return SpiralMatrix
  }
  const matrix = [
    [1,  2,   3],
    [4,  5,   6],
    [7,  8,   9],
    [10, 11, 12]
  ]

  console.log(spiralOrder(matrix))
