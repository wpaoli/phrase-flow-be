const express = require("express");
const router = express.Router();
const {
  addPhrase,
  getPhrases,
  updatePhrase,
} = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

//TODO: Document the request expected
router.post("/phrase", checkToken, addPhrase);
router.put("/phrase/:id", checkToken, updatePhrase);

router.get("/phrases", checkToken, getPhrases);

module.exports = router;
