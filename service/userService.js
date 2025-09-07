const userModel = require('../model/userModel');

exports.register = (req, res) => {
  const { username, password, favorecidos } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  if (userModel.findByUsername(username)) {
    return res.status(409).json({ message: 'User already exists.' });
  }
  userModel.addUser({ username, password, favorecidos: favorecidos || [], balance: 10000 });
  return res.status(201).json({ message: 'User registered successfully.' });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  const user = userModel.findByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  return res.status(200).json({ message: 'Login successful.' });
};

exports.getAll = (req, res) => {
  const users = userModel.getAllUsers().map(u => ({ username: u.username, favorecidos: u.favorecidos, balance: u.balance }));
  return res.json(users);
};
