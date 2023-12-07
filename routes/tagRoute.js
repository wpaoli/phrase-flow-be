const express = require("express");
const router = express.Router();
const { addTag } = require("../controllers/tagController");
// const { checkToken } = require("../controllers/checkToken");

const { checkSession } = require("../controllers/checkSession");

//TODO: Document the request expected
router.post("/tag", checkSession, addTag);

module.exports = router;
