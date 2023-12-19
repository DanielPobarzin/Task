
function MergeSortArray(arr1,arr2){
return (arr1.concat(arr2)).sort(function(a,b)
   {
    return a-b
   })
}
function CenterPoint(MergeSortArray){
let i = MergeSortArray.length%2===0? Math.trunc(MergeSortArray.length/2)-1 :  Math.ceil(MergeSortArray.length/2)-1
return (MergeSortArray[i]+MergeSortArray[i+1])/2
}
let nums1 = [1,3,4]
let nums2 = [2]

console.log (CenterPoint(MergeSortArray(nums1,nums2)))
console.log ((MergeSortArray(nums1,nums2)))
console.log (Math.log(nums1.length+nums2.length))