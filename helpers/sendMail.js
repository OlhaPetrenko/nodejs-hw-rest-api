const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KAY, FROM_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KAY);

const sendMail = async (data) => {
  const mail = { ...data, from: FROM_EMAIL };
  await sgMail.send(mail);
  return true;
};

module.exports = sendMail;
