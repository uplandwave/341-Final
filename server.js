const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mongodb = require('./data/database');
const cors = require('cors');
const app = express();

// Load Config
dotenv.config({ path: './.env' });


// connectDB();

const port = process.env.PORT || 3001;

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

// Enable CORS for all routes (you can restrict this as needed)
app.use(cors()); 

app.use('/api-docs', cors(), require('./routes/swagger'));

app.use('/', require('./routes'));


mongodb.initDb((err) => {
  if(err) {
      console.log(err);
  }
  else{
    app.listen(port, () => {
      console.log(`App listening on http://localhost:${port}`);
    });
  }
})

