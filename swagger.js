const swaggerAutogen = require('swagger-autogen')();

//Use this for DEV
const doc = {
  info: {
    title: 'CSE 341 Final Project - API',
    description: 'CSE 341 Final Project for Tiffany Voorhees and Luke Briggs',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
