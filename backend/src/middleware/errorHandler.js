const { ValidationError, NotFoundError } = require('./errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError || err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
