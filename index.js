const express = require('express');
const path = require('path');

const app = express();

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Put all API endpoints under '/api'
const SERVER_ERROR_CODE = 500;
const CLIENT_ERROR_CODE = 400;

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM clients');
    const results = { 'results': (result) ? result.rows : null};
    client.release();
  } catch (err) {
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

    let qry = 'SELECT * FROM clients WHERE id = $1';
    let db = await pool.connect();
    let data = await db.query(qry, [userid]); // get for 1 row, all for multiple
    db.release();

    if (!data) {
      return res.status(CLIENT_ERROR_CODE).send("The passcode you've entered is incorrect");
    }

    let result = {
      "id": userid,
      "name": data.rows[0].name.split("-"),
      "pets": data.rows[0].pets.split("-"),        // - for multiple pets
      "species": data.rows[0].species.split("-")
    }

    res.json(result);
  } catch (err) {
    res.status(SERVER_ERROR_CODE).send("The passcode you've entered is incorrect");
  }
});

/* GET strava access credientials*/
app.get('/api/strava-creds', async function(req, res, next) {
  try {
    let qry = 'SELECT * FROM strava_credentials WHERE client_id = $1';
    let db = await pool.connect();
    let data = await db.query(qry, [90470]); // get for 1 row, all for multiple
    db.release();

    if (!data) {
      return res.status(CLIENT_ERROR_CODE).send("Couldn't get data");
    }

    let result = {
      "client_id": data.rows[0].client_id,
      "client_secret": data.rows[0].client_secret,
      "access_token": data.rows[0].access_token,
      "refresh_token": data.rows[0].refresh_token,
      "expires_at": data.rows[0].expires_at
    }

    res.json(result);
  } catch (err) {
    res.status(SERVER_ERROR_CODE).send("Failed to process request");
  }
});

/* update record w/ new token info */
app.post('/api/update-strava-creds', async function (req, res, next) {
  try {
    let refresh_token = req.body.refresh_token;
    let access_token = req.body.access_token;
    let expires_at = req.body.expires_at; // UNIX time
    let qry = "UPDATE strava_credentials SET access_token = $1, refresh_token = $2, expires_at = $3 WHERE client_id = $4";
    let db = await pool.connect();
    await db.query(qry, [access_token, refresh_token, expires_at, 90470]); // update 1 row
    db.release();
  } catch (err) {
    res.status(SERVER_ERROR_CODE).send("Failed to process request");
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
