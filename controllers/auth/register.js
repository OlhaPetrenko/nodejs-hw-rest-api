const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    password: hashPass,
    email,
    subscription,
  });
  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
  });
};

module.exports = register;
