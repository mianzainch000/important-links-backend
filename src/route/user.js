const express = require("express");
const router = express.Router();
const {
  Signup,
  Login,
  ForgotPassword,
  ResetPassword,
} = require("../controller/user");
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/forgotPassword", ForgotPassword);
router.post("/resetPassword/:tokenEmail", ResetPassword);

module.exports = router;
