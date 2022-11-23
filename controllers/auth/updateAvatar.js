const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  console.log(req.file);
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}-${originalname}`;
  const resultUpload = path.join(avatarDir, filename);
  console.log("tempUpload", tempUpload);
  console.log("resultUpload", resultUpload);

  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(req.user._id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;

// ====
// const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

// const updateAvatar = async (req, res)=> {
//     const {_id} = req.user;
//     const {path: tempUpload, originalname} = req.file;
//     const filename = `${_id}_${originalname}`;
//     const resultUpload = path.join(avatarsDir, filename);
//     await fs.rename(tempUpload, resultUpload);
//     const avatarURL = path.join("avatars", filename);
//     await User.findByIdAndUpdate(req.user._id, {avatarURL});

//     res.json({
//         avatarURL
//     })
