const express = require("express");
const router = express.Router();
const { addPhrase } = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

// -------------------------CUSTOM ROUTE-------------------------
router.post("/add-phrase", checkToken, addPhrase);

// -------------------------EXPORT ROUTER-------------------------
module.exports = router;
