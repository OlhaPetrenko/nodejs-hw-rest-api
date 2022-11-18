const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  add,
  update,
  updateStatusContact,
  remove,
} = require("../../controllers/contacts");

const { validateBody, isValidId, auth } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

router.get("/", auth, ctrlWrapper(getAll));

router.get("/:contactId", auth, isValidId, ctrlWrapper(getById));

router.post("/", auth, validateBody(schemas.addScheme), ctrlWrapper(add));

router.put(
  "/:contactId",
  auth,
  isValidId,
  validateBody(schemas.addScheme),
  ctrlWrapper(update)
);

router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  validateBody(schemas.updateFavoriteScheme),
  ctrlWrapper(updateStatusContact)
);

router.delete("/:contactId", auth, isValidId, ctrlWrapper(remove));

module.exports = router;
