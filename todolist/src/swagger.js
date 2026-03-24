const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TodoList API',
      version: '1.0.0',
      description: 'A simple CRUD REST API for managing todos, backed by SQLite.',
      contact: {
        name: 'TodoList API Support',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Todo: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            title: {
              type: 'string',
              example: 'Buy groceries',
            },
            description: {
              type: 'string',
              example: 'Milk, eggs, bread',
            },
            completed: {
              type: 'boolean',
              example: false,
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-01T00:00:00.000Z',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-01T00:00:00.000Z',
            },
          },
        },
        CreateTodo: {
          type: 'object',
          required: ['title'],
          properties: {
            title: {
              type: 'string',
              example: 'Buy groceries',
            },
            description: {
              type: 'string',
              example: 'Milk, eggs, bread',
            },
          },
        },
        UpdateTodo: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Buy groceries',
            },
            description: {
              type: 'string',
              example: 'Milk, eggs, bread',
            },
            completed: {
              type: 'boolean',
              example: true,
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Not found',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
