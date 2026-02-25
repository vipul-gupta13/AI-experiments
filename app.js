const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.csv');

// Ensure data file exists with headers
if (!fs.existsSync(DATA_FILE)) {
  const headers = 'firstName,lastName,age,location\n';
  fs.writeFileSync(DATA_FILE, headers);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const { firstName, lastName, age, location } = req.body;
  const record = { firstName, lastName, age, location };

  const csvWriter = createCsvWriter({
    path: DATA_FILE,
    header: [
      { id: 'firstName', title: 'firstName' },
      { id: 'lastName', title: 'lastName' },
      { id: 'age', title: 'age' },
      { id: 'location', title: 'location' },
    ],
    append: true,
  });

  csvWriter
    .writeRecords([record])
    .then(() => {
      res.send('Form submitted successfully!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data');
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
