const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'API for retrieving and creating LDS temple records. **API Key:** `Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N`',    version: '1.0.0',
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: ['http'],
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      name: 'apiKey',
      in: 'header',
      description: 'API key required by the temple read endpoints.',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // Points to your main file or routes

swaggerAutogen(outputFile, endpointsFiles, doc);