const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  let { page = 1, limit = 2, favorite } = req.query;

  limit = limit > 10 ? 10 : limit;
  const skip = (page - 1) * limit;

  if (!favorite) {
    const result = await Contact.find({ owner })
      .sort({ name: 1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.find({ owner }).count();
    return res.json({ page, limit, total, result });
  }
  const result = await Contact.find({ owner, favorite })
    .sort({ name: 1 })
    .skip(skip)
    .limit(limit);

  const total = await Contact.find({ owner, favorite }).count();
  res.json({ page, limit, total, result });
};

module.exports = getAll;
