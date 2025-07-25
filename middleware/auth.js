const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    //expiresIn is configured to be 1d
    if (err.name === 'TokenExpiredError') {
      throw new CustomAPIError('Token has expired', 403);
    }
    if (err.name === 'JsonWebTokenError') {
      throw new CustomAPIError('Malformed or invalid token', 403);
    }
    throw new CustomAPIError('Authentication failed', 403);
  }
};

module.exports = authenticationMiddleware;
