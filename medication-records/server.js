const { Pool } = require('pg');

const pool = new Pool({
  user: 'yasminek',
  host: 'localhost',
  database: 'medications',
  // password: 'your_password',
  port: 5432,
});

pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.rows);
  }
});

const {
  getMissedMedications,
  getMedicationByName
} = require("./medication-records");


const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
app.use(morgan('dev'));

const records = [
  { name: "Vitamin D", date: "2026-10-01", taken: true },
  { name: "Vitamin D", date: "2026-10-02", taken: false },
  { name: "Iron", date: "2026-10-02", taken: true },
  { name: "Vitamin D", date: "2026-10-03", taken: false }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/medications', async (req, res) => {
  try {
    const name = req.query.name

    const result = await pool.query(
      'SELECT * FROM medications WHERE name = $1',
      [name]
    );

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch medications' })
  }
});

app.get('/medications/missed', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM medications WHERE taken = $1',
      [false]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch medications' });
  }
});

// Works with hardcoded data
// app.get('/medications/missed', (req, res) => {
//   try{
//       const missedMedsList = getMissedMedications(records);
//       res.status(200).json(missedMedsList);
//   } catch (error) {
//       res.status(500).json({ message: "Failed to fetch records" });
//   }
// });


app.get('/medications/:name', (req, res) => {
  try {
    const medicationName = (req.params.name)

    const medicationRecords = getMedicationByName(records, medicationName);

    res.status(200).json(medicationRecords);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch medication name" });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


