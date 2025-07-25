require('dotenv').config();
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

//null check in case JWT_SECRET is not defined in .env
const JWT_SECRET = process.env.JWT_SECRET || 'jwtSecret';
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide both username and password', 400);
  }

  try {
    const ID = 23 // dummy ID
    const token = generateToken({ id: ID, username });
    res.status(200).json({ msg: 'User authenticated', token });
  } catch (err) {
    console.error('Error generating JWT:', err.message);
    res.status(500).json({ msg: 'Internal server error. Please try again later.' });
  }
};

const dashboard = async (req, res) => {
  try {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (err) {
    console.error('Dashboard error:', err.message);
    throw new CustomAPIError('Not authorized to access this route', 401);
  }
};

module.exports = {
  login,
  dashboard,
};