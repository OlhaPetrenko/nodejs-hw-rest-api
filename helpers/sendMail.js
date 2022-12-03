const sgMail = require("sendgrid");
require("dotenv").config();

const { SENDGRID_API_KAY } = process.env;

sgMail.setApiKey(SENDGRID_API_KAY);

const sendMail = async (data) => {
  const mail = { ...data, from: "o.l.petr27@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;
