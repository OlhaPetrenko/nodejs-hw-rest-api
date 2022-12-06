const { User } = require("../../models/user");
const { RequestError, sendMail } = require("../../helpers");
const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404);
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Підтвердження реєстрації",
    html: `<a target="_blank" href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Для підтвердження перестрації перейдеть за посиланням<a/>`,
  };

  await sendMail(mail);
  res.json({ message: "Verification email sent" });
};

module.exports = resendEmail;
