const express = require("express");
const router = express.Router();
const { addPhrase, getPhrases } = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

// -------------------------CUSTOM ROUTE-------------------------
router.post("/add-phrase", checkToken, addPhrase);
router.get("/phrases", checkToken, getPhrases);

// -------------------------EXPORT ROUTER-------------------------
module.exports = router;
