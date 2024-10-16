const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./data/database');
const app = express();

// Load Config
dotenv.config({ path: './.env' });

connectDB();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// mongodb.initDb((err) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         app.listen(port, () => {
//             console.log(`Database: \x1b[32mCONNECTED\x1b[0m - Node: \x1b[32mRUNNING\x1b[0m - Listening: \x1b[32mPort:${port}\x1b[0m`);
//             console.log(`\x1b[94mRoutes available: \x1b[0m`);
//             console.log(`\x1b[32m++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\x1b[0m`);
//             console.log(`\n`);
//           });
//     }
// })
