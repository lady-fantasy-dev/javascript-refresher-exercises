// Find all the duplicate IDs.

const ids = [1, 2, 3, 2, 4, 1];

// pseudocode
// Define two new sets: seen and duplicates
// Loop over array of IDs
// If the ID has already been seen, add it to duplicates array
// If not seen, add it to the seen array

const seen = new Set;
const duplicates = new Set;

for (const id of ids) {
  if (seen.has(id)) {
    duplicates.add(id);
  }else{
    seen.add(id);
  }
}

console.log(...duplicates)

