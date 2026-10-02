// Write a function that checks if the sum of two numbers adds up to the target.

// Pseudocode:
// define sum and set it to 0
// loop over the array
// within the first loop, loop over array with the index + 1
// get their sum
// if the sum equals the target, return true

const findSumTarget = (arr, target) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++ ) {
    for (let j = 0; j < arr.length; j++){
      sum = arr[i] + arr[j];
      if (sum === target){
        return true
      }
    }
  }
  return false
}

// Test the function
array = [10, 20, 30, 40, 50]
console.log(findSumTarget(array, 50))
