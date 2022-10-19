const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "No country",
      version: "1.0.0",
      //description: "Project react-nodejs",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
  
  tags: [
    {
      name: "auth",
      description: "Operaciones sobre autorización",
    }
  
  
  ],
};

module.exports = swaggerOptions;
