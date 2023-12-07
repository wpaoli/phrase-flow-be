const express = require("express");
const router = express.Router();
const {
  addPhrase,
  getPhrases,
  updatePhrase,
  addTagToPhrase,
} = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

const { checkSession } = require("../controllers/checkSession");

//TODO: Document the request expected
router.post("/phrase", checkSession, addPhrase);
router.put("/phrase/:id", checkSession, updatePhrase);

router.get("/phrases", checkSession, getPhrases);

//add tag to phrase
router.post("/phrase/:phraseId/tag/:tagId", checkSession, addTagToPhrase);

module.exports = router;
