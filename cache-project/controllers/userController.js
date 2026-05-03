const userService = require("../services/userService");

// GET /users
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// GET /users/:id
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error fetching user" });
  }
};

// GET /users/city/:city
const getUsersByCity = async (req, res) => {
  try {
    const users = await userService.getUsersByCity(req.params.city);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error filtering users" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUsersByCity,
};
