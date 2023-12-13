const matrix = [
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
]

// Вывод значений матрицы в консоль
console.log("Матрица имеет вид:")
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i])
}
// Определение количества специальных значений
let specialCount = 0
for (let i = 0; i < matrix.length; i++) { 
  let row = 0
  let column = 0
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 1) {
      row+=1
      if (row === 1) {
        if (matrix[j][i] === 1) {
          column+=1
        }
      }
    }
  }
  if (row === 1 && column === 1) {
    specialCount+=1
  }
}

// Вывод количества специальных значений в консоль
console.log("Количество специальных элементов:" + specialCount)