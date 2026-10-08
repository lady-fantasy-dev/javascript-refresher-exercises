const { Pool } = require('pg');
const cors = require('cors')

const pool = new Pool({
  user: 'yasminek',
  host: 'localhost',
  database: 'medications',
  port: 5432,
});

pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.rows);
  }
});

const express = require('express');
const app = express();
const port = 3000;

app.use(cors())
const morgan = require('morgan');
app.use(morgan('dev'));

const {
  getMissedMedications,
  getMedicationByName
} = require("./medication-records");


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/medications', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
      FROM medications
      ORDER BY date DESC`
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch medications' })
  }
});

// you query by medication name
// app.get('/medications', async (req, res) => {
//   try {
//     const name = req.query.name

// if (name) {
//   // filter by name
// } else {
//   // return everything
// }

//     const result = await pool.query(
//       ` SELECT *
//       FROM medications
//       WHERE name = $1
//       ORDER BY date DESC`,
//       [name]
//     );

//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch medications' })
//   }
// });

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

app.get('/medications/:id', async (req, res) => {
  try {
    const id = (req.params.id)

    const result = await pool.query(
      `SELECT *
      FROM medications
      WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Medication not found."
      })
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch medication by ID" });
  }
})

// app.get('/medications/:name', (req, res) => {
//   try {
//     const medicationName = (req.params.name)

//     const medicationRecords = getMedicationByName(records, medicationName);

//     res.status(200).json(medicationRecords);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch medication name" });
//   }
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


