const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,PUT,POST,DELETE',
  exposedHeaders: 'Authorization',
  optionsSuccessStatus: 200,
};

module.exports = { corsOptions };
