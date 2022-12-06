const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");
const { validateBody, auth, upload } = require("../../middlewares");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerScheme),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginScheme),
  ctrlWrapper(ctrl.login)
);

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch(
  "/change/subscript",
  auth,
  validateBody(schemas.updateSubscriptScheme),
  ctrlWrapper(ctrl.updateSubscriptUser)
);

router.patch(
  "/change/avatar",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

router.post(
  "/verify",
  validateBody(schemas.emailScheme),
  ctrlWrapper(ctrl.resendEmail)
);

module.exports = router;
