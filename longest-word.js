// Write a function to find the longest word in strings.

// Pseudocode
// split the string into words
// define longest variable to store the longest word in
// loop over the words
// compare the length
// if any word is longer than the current longest word, it would be the new longest word
// return longest word

const findLongest = (str) => {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}


// Test the function
console.log(findLongest("I love rock 'n' role"))
console.log(findLongest("What's going on?"))
console.log(findLongest("Let's see if our method works"))
