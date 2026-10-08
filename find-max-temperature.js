// Write a function named findHighestTemperature() which should return the highest temperature in the records,
// or null if no records.

const records = [
  { type: "temperature", value: 37.2 },
  { type: "weight", value: 5.1 },
  { type: "temperature", value: 38.4 },
  { type: "temperature", value: 39.1 },
  { type: "weight", value: 5.3 },
];


function findHighestTemperature(records) {
  let maxTemperature = null;

  for (record of records) {
    if (record.type !== "temperature") {
      continue;
    }
    if (maxTemperature === null || record.value > maxTemperature) {
      maxTemperature = record.value;
    }
  }
  return maxTemperature;
}


console.log(findHighestTemperature(records));
