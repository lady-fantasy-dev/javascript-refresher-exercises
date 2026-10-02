// Write a function to find the biggest number in an array

// Pseudocode:
// define and set maximum to the first element of array
// loop over array elements
// if the current letter is bigger than maximum, it is the biggest

const findMaximum = (arr) => {
  let maximum = arr[0];
  for (let num of arr){
    if (num > maximum) {
      maximum = num;
    }
  }
  return maximum;
}

// Test the function
array = [1, 2, 3, 4, 5];
console.log(findMaximum(array));
