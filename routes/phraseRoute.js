const express = require("express");
const router = express.Router();
const { addPhrase, getPhrases } = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

//TODO: Document the request expected
router.post("/add-phrase", checkToken, addPhrase);
router.get("/phrases", checkToken, getPhrases);

module.exports = router;
