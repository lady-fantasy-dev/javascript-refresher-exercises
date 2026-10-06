// Return the first record whose type has already appeared earlier in the list.
// If no type is repeated, return: null
// Expected output: { date: "2026-10-03", type: "temperature", value: 38.1 }

const records = [
  { date: "2026-10-01", type: "temperature", value: 37.2 },
  { date: "2026-10-02", type: "weight", value: 5.1 },
  { date: "2026-10-03", type: "temperature", value: 38.1 },
  { date: "2026-10-04", type: "weight", value: 5.2 },
  { date: "2026-10-05", type: "temperature", value: 38.5 },
];


function findFirstRepeatedType(records) {
  let seen = []

  for (let record of records) {
    if (seen.includes(record.type)) {
      return record
    } else {
      seen.push(record.type)
    }
  }
  return null
}

console.log(findFirstRepeatedType(records))
