/**
 * @param {number[]} nums
 * @return {number} 
 */
const prompt = require("prompt-sync")() 
let input = (prompt("Ввод через запятую ---> "))
var nums = Array.from(input.split(','), Number)
console.log ( nums)
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++){
         if (nums [i] === ''){
             continue
    } else {
    for (let j = 0; j < nums.length; j++)
         if (i != j && nums[i] === nums [j]) {
             delete nums[j]
             nums[j] = '_'
        } else {
        continue
        }
    }
    }

let SortNum = [...nums.filter(item => typeof item === 'number'), ...nums.filter(item => typeof item === 'string')]
for (let i = 0; i < SortNum.length; i++) {
    for (let j = 0; j < SortNum.length - i; j++) {
      if (SortNum[j] > SortNum[j + 1]) {
        [SortNum[j], SortNum[j + 1]] = [SortNum[j + 1], SortNum[j]]; // Меняем значения переменных
      }
    }
  }

    console.log ("Полученный массив: " + SortNum.join(','))
    return SortNum.filter(item => typeof item === 'number').length
}

    console.log ("Количество элементов: " + removeDuplicates(nums))