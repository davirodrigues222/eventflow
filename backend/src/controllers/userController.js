const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// TODO: replace stubs with real DB queries

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  res.status(201).json({ message: 'User created', user: { name, email, role } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // TODO: fetch user from DB and verify password
  const token = jwt.sign({ id: 1, email, role: 'participant' }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  res.json({ token });
};

exports.getProfile = async (req, res) => {
  res.json({ user: req.user });
};
