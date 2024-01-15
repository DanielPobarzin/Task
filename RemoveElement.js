/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const prompt = require("prompt-sync")() 
let nums = Array.from((prompt("Ввод через запятую массива ---> ")).split(','), Number)
let val = Number((prompt("Необходимый элемент ---> ")))
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if ( nums[i] === val) {
            delete nums[i]
            nums[i] = '_'
       }      
        if (nums [i] === ''){
            continue
   }   
}
let Num = [...nums.filter(item => typeof item === 'number'), ...nums.filter(item => typeof item === 'string')]
console.log ("nums = " + "["+ Num.join(',') + "]")
return Num.filter(item => typeof item === 'number').length
}
    console.log ("Количество элементов: " + removeElement(nums,val))
