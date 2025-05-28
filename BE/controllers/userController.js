const userService = require('../services/userService');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchUsers = async (req, res) => {
    try {
        const { q } = req.query;
        const users = await userService.searchUsers(q);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};