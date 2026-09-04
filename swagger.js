const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Temples API',
    description: 'Temples API Documentation',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Points to your main file or routes

swaggerAutogen(outputFile, endpointsFiles, doc);