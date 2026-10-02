// Write a function to reverse strings

// split the characters in the string
// reverse the characters
// join them again

const reverseString = (str) => {
  return str
      .split("")
      .reverse()
      .join("")
};

// Test the function
console.log(reverseString("hello"));
console.log(reverseString("What's up?"));


