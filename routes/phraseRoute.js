const express = require("express");
const router = express.Router();
const {
  addPhrase,
  getPhrases,
  updatePhrase,
} = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

const { checkSession } = require("../controllers/checkSession");

//TODO: Document the request expected
router.post("/phrase", checkSession, addPhrase);
router.put("/phrase/:id", checkSession, updatePhrase);

router.get("/phrases", checkSession, getPhrases);

module.exports = router;
