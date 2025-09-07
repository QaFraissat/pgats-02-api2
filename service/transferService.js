
const userModel = require('../model/userModel');
const transferModel = require('../model/transferModel');

exports.transfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || typeof amount !== 'number') {
    return res.status(400).json({ message: 'From, to, and amount are required.' });
  }
  const sender = userModel.findByUsername(from);
  const recipient = userModel.findByUsername(to);
  if (!sender || !recipient) {
    return res.status(404).json({ message: 'Sender or recipient not found.' });
  }
  if (sender.balance < amount) {
    return res.status(400).json({ message: 'Insufficient funds.' });
  }
  const isFavorecido = sender.favorecidos.includes(to);
  if (!isFavorecido && amount >= 5000) {
    return res.status(403).json({ message: 'Transfers >= R$ 5.000,00 only allowed to favorecidos.' });
  }
  sender.balance -= amount;
  recipient.balance += amount;
  // Salva transferência no histórico
  transferModel.addTransfer({ from, to, amount, date: new Date().toISOString() });
  return res.status(200).json({ message: 'Transfer successful.' });
};
