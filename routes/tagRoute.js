const express = require("express");
const router = express.Router();
const { addTag, getTags } = require("../controllers/tagController");
// const { checkToken } = require("../controllers/checkToken");

const { checkSession } = require("../controllers/checkSession");

//TODO: Document the request expected
router.post("/tag", checkSession, addTag);

router.get("/tags", checkSession, getTags);

module.exports = router;
