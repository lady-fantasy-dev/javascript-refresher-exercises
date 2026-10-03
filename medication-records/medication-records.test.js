const getMissedMedications = require('./medication-records')

test('gets missed medication', () => {
  const records = [
    { name: "Vitamin D", date: "2026-10-01", taken: true },
    { name: "Vitamin D", date: "2026-10-02", taken: false },
    { name: "Iron", date: "2026-10-02", taken: true },
    { name: "Vitamin D", date: "2026-10-03", taken: false }
  ];

  expect(getMissedMedications(records)).toEqual(
    [
      { name: 'Vitamin D', date: '2026-10-02', taken: false },
      { name: 'Vitamin D', date: '2026-10-03', taken: false }
    ]
  )
});

test('records exist but none are missed', () => {
  const records = [
    { name: "Vitamin D", date: "2026-10-01", taken: true },
    { name: "Vitamin D", date: "2026-10-02", taken: true },
    { name: "Iron", date: "2026-10-02", taken: true },
    { name: "Vitamin D", date: "2026-10-03", taken: true }
  ];

  expect(getMissedMedications(records)).toEqual([])
});

test('empty records returns empty array', () => {
  const records = []

  expect(getMissedMedications(records)).toEqual([])
});

test('all records are missed', () => {
  const records = [
    { name: "Vitamin D", date: "2026-10-01", taken: false },
    { name: "Vitamin D", date: "2026-10-02", taken: false },
    { name: "Iron", date: "2026-10-02", taken: false },
    { name: "Vitamin D", date: "2026-10-03", taken: false }
  ];

  expect(getMissedMedications(records)).toEqual(records)
});
