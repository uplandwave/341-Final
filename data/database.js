// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URL);

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Db is already initiaized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDatabase = () => {
    if (!database) {
        throw Error('Database not Initialized')
    }
    return database;
};

module.exports = {
    initDb,
    getDatabase
};
