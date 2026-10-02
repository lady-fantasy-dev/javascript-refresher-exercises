// Count the frequency of each element in the array below

const numbers = [1, 1, 2, 2, 2, 3]

const result = numbers.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc;
},{});
