let matrix = [
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
for (let i = 0; i < matrix.length; i++) { // Счетчик проверки по строке
  for (let j = 0; j < matrix[0].length; j++) { // Счетчик проверки по столбцу
    if (matrix[i][j] === 1) { // Элемент матрицы равен 1
        let Special = true // Специальное значение 
      for (let k = 0; k < matrix.length; k++) { // Проверка наличия других 1 в строке
        if (matrix[k][j] === 1 &&  k !== i ) { // Если единица в строке найдена и индекс не соответсвует найденной в первый раз
          Special = false
          break
        }
      }
      for (let l = 0; l < matrix[0].length; l++) { // Проверка наличия других 1 в столбце
        if (matrix[i][l] === 1 && l !== j ) { // Если единица в столбце найдена и индекс не соответсвует найденной в первый раз
          Special = false
          break
        }
      }
      if (Special) {
        specialCount+=1
      }
    }
  }
}

// Вывод количества специальных значений в консоль
console.log("Количество специальных элементов:" + specialCount)