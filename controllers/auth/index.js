const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscriptUser = require("./updateSubscriptUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendEmail = require("./resendEmail");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscriptUser,
  updateAvatar,
  verify,
  resendEmail,
};
