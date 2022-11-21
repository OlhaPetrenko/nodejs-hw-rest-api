const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const remove = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findOneAndRemove({ contactId, owner });
  if (!result) {
    throw RequestError(404);
  }
  res.json({ message: "Contact deleted", deletedData: result });
};
module.exports = remove;
