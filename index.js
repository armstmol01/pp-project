const express = require('express');
const path = require('path');

const app = express();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
const DB_NAME = "rover-clients.db";
const SERVER_ERROR_CODE = 500;
const CLIENT_ERROR_CODE = 400;

// app.get('/', (req, res) => {
//   console.log("EHHLO");
//   res.send('Hello World!')
// })

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM clients');
    const results = { 'results': (result) ? result.rows : null};
    client.release();
    console.log(results);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

/* GET users listing. */
app.get('/api/user', async function(req, res, next) {
  try {
    const userid = req.query.passcode; // stored as text in Heroku db
    if (!userid) {
      return res.status(CLIENT_ERROR_CODE).send("The passcode you've entered is incorrect");
    }
    console.log(userid);
    let qry = 'SELECT * FROM clients WHERE id = $1';
    const client = await pool.connect();
    let data = await client.query(qry, [userid]); // get for 1 row, all for multiple

    if (!data) {
      client.release();
      return res.status(CLIENT_ERROR_CODE).send("The passcode you've entered is incorrect");
    }

    let result = {
      "id": userid,
      "name": data.rows[0].name.split("-"),
      "pets": data.rows[0].pets.split("-"),        // - for multiple pets
      "species": data.rows[0].species.split("-")
    }
    console.log(result);

    res.json(result);
    console.log(result);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(SERVER_ERROR_CODE).send("Failed get request");
  }
});

/* GET strava access credientials*/
app.get('/api/strava-creds', async function(req, res, next) {
  try {
    let qry = 'SELECT * FROM strava_credentials WHERE client_id = $1';
    let db = await getDBConnection();
    let data = await db.query(qry, [90470]); // get for 1 row, all for multiple
    db.release();

    if (!data) {
      return res.status(CLIENT_ERROR_CODE).send("Couldn't get data");
    }

    let result = {
      "client_id": data.client_id,
      "client_secret": data.client_secret,
      "access_token": data.access_token,
      "refresh_token": data.refresh_token,
      "expires_at": data.expires_at
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(SERVER_ERROR_CODE).send("Failed get request");
  }
});

/* update record w/ new token info */
app.post('/api/update-strava-creds', async function (req, res, next) {
  // JavaScript object containing the parse JSON
  try {
    let refresh_token = req.body.refresh_token;
    let access_token = req.body.access_token;
    let expires_at = req.body.expires_at; // UNIX time
    let qry = "UPDATE strava_credentials SET access_token = $1, refresh_token = $2, expires_at = $3 WHERE client_id = $4";
    let db = await getDBConnection();
    await db.query(qry, [access_token, refresh_token, expires_at, 90470]); // update 1 row
    db.release();
  } catch (err) {
    console.error(err);
    res.status(SERVER_ERROR_CODE).send("Failed post request");
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/**
 * Establishes database connection
 */
 async function getDBConnection() {
  const db = await pool.connect();
  return db;


  // const db = await sqlite.open({
  //   filename: DB_NAME,
  //   driver: sqlite3.Database
  // });
  // return db;
}

const port = process.env.PORT || 5000;
app.listen(port);
