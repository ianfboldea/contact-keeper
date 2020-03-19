const express = require("express");
const router = express.Router();

// @route     GET api/v1/contacts
// @desc      Get all of the user's contacts
// @access    Private
router.get("/", (req, res) => {
  res.send("Gets users contacts");
});

// @route     POST api/v1/contacts
// @desc      Add new contact
// @access    Private
router.post("/", (req, res) => {
  res.send("Create new contact");
});

// @route     PUT api/v1/contacts
// @desc      Update a contact
// @access    Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route     DELETE api/v1/contacts
// @desc      Delete a contact
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
