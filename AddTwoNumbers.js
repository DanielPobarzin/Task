/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */

function AddTwoNumbers(l1,l2)
{
l1 = parseInt(l1.reverse().join(''))
l2 = parseInt(l2.reverse().join(''))
let l3 = l1 + l2
let AddTwoNum =Array.from(String(l3), Number)
return (AddTwoNum.reverse().join(''))
}

let line1 = [2,4,3,8]
let line2 = [5,6,4,1]

console.log(AddTwoNumbers(line1,line2))