// Write a function to return a baby's first temperature record where:
// 1. The current temperature is ≥ 38°C, AND
// 2. The immediately previous temperature record was < 38°C.
// If there is no such record, return: null

// For the example above, the answer should be:
// { date: "2026-10-02", type: "temperature", value: 38.1 }

const records = [
  { date: "2026-10-01", type: "temperature", value: 37.2 },
  { date: "2026-10-01", type: "weight", value: 5.1 },
  { date: "2026-10-02", type: "temperature", value: 38.1 },
  { date: "2026-10-03", type: "weight", value: 5.2 },
  { date: "2026-10-04", type: "temperature", value: 37.8 },
  { date: "2026-10-05", type: "temperature", value: 38.5 },
];

function findFirstFeverAfterNormal(records) {
  let previousTemperature = null

  for (let i = 0; i < records.length; i++) {
    if (records[i].type === "temperature" && records[i].value < 38) {
      previousTemperature = records[i]
    }

    if (previousTemperature !== null && records[i].type === "temperature" && records[i].value >= 38) {
      return records[i];

    }
  }
  return null
}

console.log(findFirstFeverAfterNormal(records))
