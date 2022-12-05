const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");
const { RequestError, sendMail } = require("../../helpers");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = await User.create({
    password: hashPass,
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Підтвердження реєстрації",
    html: `<a target="_blank" href='${BASE_URL}/api/users/verify/${verificationToken}'>Для підтвердження перестрації перейдеть за посиланням<a/>`,
  };

  await sendMail(mail);

  res.status(201).json({
    email: newUser.email,
    password: newUser.password,
    verificationToken: newUser.verificationToken,
  });
};

module.exports = register;
