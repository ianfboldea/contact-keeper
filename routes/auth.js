const express = require("express");
const router = express.Router();

// @route     GET api/v1/auth
// @desc      Get the logged in user
// @access    Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route     POST api/v1/auth
// @desc      Authorizes the user and gets a tokekn
// @access    Public
router.post("/", (req, res) => {
  res.send("Login in user");
});

module.exports = router;
