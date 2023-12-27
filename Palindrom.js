/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    console.log ("Исходное = " + x)
    console.log ("Обратное = " + x.toString().split('').reverse().join(''))
    return x.toString().split('').reverse().join('') === x.toString()? true: false

}
let x = -121
console.log ("Палиндорм? --- > " + isPalindrome(x))