// Given two comma-separated lists, return the numbers that appear in both.

// Input: ["1, 3, 4, 7", "1, 2, 4, 8"]
// Output: [1, 4]

// Pseudocode:
// Define result array
//  Convert array into two arrays
//  Loop over and compare
//  Push matching elements to result array

strArr = ["1, 3, 4, 7", "1, 2, 4, 8"];

let arr1 = strArr[0].split(",");
let arr2 = strArr[1].split(",");

let result = [];

arr1.forEach(num => {
  if (arr2.includes(num)){
    result.push(num);
  }
});


// alternative soluton:
// for (i of arr1) {
//   if (arr2.includes(i)) {
//     result.push(i)
//   }
// }
