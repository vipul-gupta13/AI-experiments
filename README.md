# Web Form to CSV

This project is a simple Express.js application that displays a web form for collecting a user's first name, last name, age, and location. Upon submission, the data is appended to a CSV file (`data.csv`) in the project root.

## Project Structure
```
AI-experiments/
├─ app.js
├─ package.json
├─ data.csv          # created automatically on first run
├─ public/
│  └─ index.html     # web form
└─ README.md
```

## Prerequisites
- Node.js v14 or newer
- npm (comes with Node.js)

## Setup
1. **Clone or copy the repository** to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
```bash
npm start
```
The server will start on port `3000` (or the port defined in the `PORT` environment variable). Open your browser and go to `http://localhost:3000` to view the form.

## Submitting Data
Fill in the form fields and click **Submit**. The data will be appended to `data.csv`. Each row corresponds to one submission:
```
firstName,lastName,age,location
John,Doe,30,New York
Jane,Smith,25,San Francisco
```

## Notes
- The CSV file is created automatically on the first run if it does not exist.
- No authentication is implemented; this is purely a demonstration.
- The application uses the `csv-writer` package to handle CSV formatting.

## Troubleshooting
- **Port already in use**: set `PORT` environment variable to an unused port before starting.
- **File write errors**: ensure you have write permissions in the project directory.

## License
MIT License
