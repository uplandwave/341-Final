const swaggerAutogen = require('swagger-autogen')();

//Use this for DEV
const doc = {
  info: {
    title: 'CSE 341 Final Project - API',
    description: 'CSE 341 Final Project for Tiffany Voorhees and Luke Briggs',
  },
  host: 'https://three41-final.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
