// Given a patient's medication records,
// determine the longest consecutive streak of days on which they took their medication.
// The function should return a number, indicating the longest consecutive streak of when medication was taken

const records = [
  { date: "2026-08-31", taken: false },
  { date: "2026-09-01", taken: true },
  { date: "2026-09-02", taken: true },
  { date: "2026-09-03", taken: true },
  { date: "2026-09-04", taken: false },
  { date: "2026-09-05", taken: true },
  { date: "2026-09-06", taken: true },
  { date: "2026-09-07", taken: false },
  { date: "2026-09-08", taken: true },
  { date: "2026-09-09", taken: true },
  { date: "2026-09-10", taken: true },
  { date: "2026-09-11", taken: true },
];

function getLongestSteak(records) {
  let longestStreak = 0
  let currentStreak = 0

  for (let i = 1; i < records.length; i++) {
    let current = records[i]
    let previous = records[i-1]

    let start = new Date(records[i-1].date);
    let end = new Date(records[i].date);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);

    if (
      previous.taken === true &&
      current.taken === true &&
      daysDifference === 1  ) {
        currentStreak ++

    } else if (
      current.taken === true
    ) {
        currentStreak = 1

    } else {
        currentStreak = 0
    }
  }

  if (currentStreak > longestStreak) {
    longestStreak = currentStreak
  }

  return longestStreak
};


// test the function
console.log(getLongestSteak(records))
