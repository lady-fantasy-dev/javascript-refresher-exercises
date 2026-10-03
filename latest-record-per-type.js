// Write a function which should return the most recent record for each type.
// The records aren't necessarily sorted.// Output: an array of records

const records = [
  { type: "weight", value: 5.2, date: "2026-09-01" },
  { type: "temperature", value: 37.1, date: "2026-09-02" },
  { type: "weight", value: 5.4, date: "2026-09-10" },
  { type: "height", value: 61, date: "2026-09-05" },
  { type: "temperature", value: 38.2, date: "2026-09-11" },
  { type: "weight", value: 5.3, date: "2026-09-06" }
];

const getLatestRecordPerType = function (records) {
  let latestRecords = {};

  for (let record of records) {
    // 1. If the type is NOT in latestRecords yet, add it immediately
    if (!(record.type in latestRecords)) {
      latestRecords[record.type] = record;
    }
    // 2. If it IS already there, compare the dates and update if the new one is newer
    else if (record.date > latestRecords[record.type].date) {
      latestRecords[record.type] = record;
    }
  }

  return Object.values(latestRecords);
};

console.log(getLatestRecordPerType(records));
