// Return the number of consecutive days on which the patient's temperature was at least 38°C.
// Output: 3

const records = [
  { type: "temperature", value: 38.1, date: "2026-08-29" },
  { type: "temperature", value: 38.1, date: "2026-08-30" },
  { type: "temperature", value: 38.1, date: "2026-08-31" },
  { type: "temperature", value: 37.2, date: "2026-09-01" },
  { type: "weight", value: 5.2, date: "2026-09-01" },
  { type: "temperature", value: 38.1, date: "2026-09-02" },
  { type: "temperature", value: 38.5, date: "2026-09-03" },
  { type: "weight", value: 5.4, date: "2026-09-04" },
  { type: "temperature", value: 37.4, date: "2026-09-04" },
  { type: "temperature", value: 38.2, date: "2026-09-05" },
];

const isFever = (record) => {
  return (
    record.type === "temperature" &&
  record.value >= 38
  );
}

const isOneDayDifferent = (current, previous) => {
  let currentDate = new Date(current.date);
  let previousDate = new Date(previous.date);
  let timeDifference = currentDate - previousDate;
  let dayDifference = timeDifference / (24 * 60 * 60 * 1000)
  return (dayDifference === 1)
}

function calculateLongestFeverStreak(records) {
  let currentStreak = 0
  let longestStreak = 0

  if (isFever(records[0])) {
    currentStreak = 1
  }

  for (let i = 1; i < records.length; i++) {
    if (isFever(records[i]) && isFever(records[i-1]) && isOneDayDifferent(records[i], records[i-1])){
      currentStreak ++

    } else {
      currentStreak = 0
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak
    }
  }
  return longestStreak
}

// test the function
console.log(calculateLongestFeverStreak(records))
