/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convertToZigZag(inputString, numRows) {
  if (numRows === 1) return inputString 
  else {
    function numberColumns(inputString, numRows) {
      let numColomnsZigZag = Math.trunc(inputString.length / (numRows + numRows - 2)) * (1 + (numRows - 2))
      let numElementsZigZag = (numRows + numRows - 2) * Math.trunc(inputString.length / (numRows + numRows - 2)) 
      if ((inputString.length - numElementsZigZag) <= numRows) {
          var numColumns = numColomnsZigZag + 1
      } else if ((inputString.length - numElementsZigZag) === 0){
        numColumns = numColomnsZigZag
      } else {
        numColumns = numColomnsZigZag + 1 + (inputString.length - numRows - numElementsZigZag)
      }
      return numColumns
    }
    const matrix = []
    for (let i = 0; i < numRows; i++) {
          matrix[i] = new Array(numberColumns(inputString, numRows))
      }

      let row = 0
      let column = 0
    let direction = -1
    for (var char of inputString) {
         matrix[row][column] = char

         if (row === 0 || row === numRows - 1) { 
          direction *= -1;
        }
        row += direction 
        if (direction === -1) {
          column += 1
         }
      } 
      let result = ""
      for (let i = 0; i < numRows; i++) {
        console.log(matrix[i].join('\t')) 
        result += matrix[i].join('')
    }
      return result
  } 
} 
const inputString = "NYKAKOVAKRASOTAEMAE"
const numRows = 5

console.log(convertToZigZag(inputString, numRows))