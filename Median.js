/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

// function MergeSortArray(arr1,arr2){
// return (arr1.concat(arr2)).sort(function(a,b)
//    {
//     return a-b
//    })
// }
// function CenterPoint(MergeSortArray){
// let i = MergeSortArray.length%2===0? Math.trunc(MergeSortArray.length/2)-1 :  Math.ceil(MergeSortArray.length/2)-1
// return (MergeSortArray[i]+MergeSortArray[i+1])/2
// }

 function Median(arr1,arr2){
  let MergeSortArray = []
  let mergeArray = []
  mergeArray = arr1.concat(arr2)
   
      // for (let i = 0; i < mergeArray.length; i++) { // ---- > Bubble sorting
      //    for (let j = 0; j < mergeArray.length - i; j++) {
      //      if (mergeArray[j] > mergeArray[j + 1]) {
      //        [mergeArray[j], mergeArray[j + 1]] = [mergeArray[j + 1], mergeArray[j]]
      //      }
      //    }
      //  }
      //  MergeSortArray = mergeArray
      //  console.log(MergeSortArray)

          MergeSortArray = (mergeArray).sort(function(a,b) // ---- > Standart sorting
          {
            return a-b
          })
          console.log(MergeSortArray)

      //   for (let i = 0; i < mergeArray.length; i++) { // ---- > Selection sorting
      //     let min = i
      //     for (let j = i + 1; j < mergeArray.length; j++) {
      //       if (mergeArray[min] > mergeArray[j]) {
      //         min = j
      //       }
      //     }
      //     [mergeArray[i], mergeArray[min]] = [mergeArray[min], mergeArray[i]]
      //   }
      // MergeSortArray = mergeArray
      //   console.log(MergeSortArray)

    //  function cycleSort(arr) { // ---- > Cycle sorting 
    //    for (let i = 0; i < arr.length; i++) {
    //      let value = arr[i]
    //      let position = i
    
    //      for (let j = i + 1; j < arr.length; j++) {
    //        if (arr[j] < value) {
    //          position++
    //        }
    //      }
    //      if (position === i) {
    //        continue
    //      }
    //      while (value === arr[position]) {
    //        position++
    //      }
    
    //      [arr[position], value] = [value, arr[position]]
    
    //      while (position !== i) {
    //        position = i;
    //        for (let k = i + 1; k < arr.length; k++) {
    //          if (arr[k] < value) {
    //            position++
    //          }
    //        }
    //        while (value === arr[position]) {
    //          position++
    //        }
    //       [arr[position], value] = [value, arr[position]]
    //      }
    //    }
    //    return arr
    //  }
    //  MergeSortArray = cycleSort(mergeArray)
    //  console.log(MergeSortArray)

    //  const qsort = (arr) => { // ---- > Fast sorting 
    //    if (arr.length < 2) {
    //        return arr
    //  }else {
    //    const pivotPosition = Math.floor(Math.random() * arr.length)
    //    const pivot = arr[pivotPosition]
    //  const less = arr.filter((value, index) => {
    //    const isPivot = index === pivotPosition
    //    return !isPivot && (value <= pivot)
    //  })
    //  const more = arr.filter(value => value > pivot)
    //  return [...qsort(less), pivot, ...qsort(more)]
    //   }
    //  }
    //  MergeSortArray = qsort(mergeArray)
    //  console.log (MergeSortArray)

  let centerIndex = (MergeSortArray.length - 1) / 2
  if (parseInt(centerIndex) === centerIndex) {
      return MergeSortArray[centerIndex]
  } else {
      return (MergeSortArray[Math.floor(centerIndex)] + MergeSortArray[Math.ceil(centerIndex)])/2
  }
 }

let nums1 = []
let nums2 = []
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}
for (let i = 0; i < 1000000; i++){
  nums1[i] = getRandomInt(0, 500)
  
}
for (let i = 0; i < 500000; i++){
  nums2[i] = getRandomInt(500, 1000)
}
console.log (nums1)
console.log (nums2)
console.log (Median(nums1,nums2))