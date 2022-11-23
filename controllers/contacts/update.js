const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const update = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = update;
