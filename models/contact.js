const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");
const phoneRegexp = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
// +38(095)555-77-44

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
      unique: true,
      match: phoneRegexp,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleSaveErrors);

const addScheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean(),
});

const updateFavoriteScheme = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addScheme,
  updateFavoriteScheme,
};

const Contact = model("contacts", contactSchema);

module.exports = {
  Contact,
  schemas,
};
