const express = require("express");
const router = express.Router();
const {
  addPhrase,
  getPhrases,
  getPhrasesByTag,
  updatePhrase,
  addTagToPhrase,
  detachTagFromPhrase,
} = require("../controllers/phraseController");
const { checkToken } = require("../controllers/checkToken");

const { checkSession } = require("../controllers/checkSession");

//TODO: Document the request expected
router.post("/phrase", checkSession, addPhrase);
router.put("/phrase/:id", checkSession, updatePhrase);

router.get("/phrases", checkSession, getPhrases);
router.get("/phrases/tag/:tagId", checkSession, getPhrasesByTag);

//add tag to phrase
router.post("/phrase/:phraseId/tag/:tagId", checkSession, addTagToPhrase);

//remove tag from a phrase
router.post(
  "/phrase/:phraseId/detatch-tag/:tagId",
  checkSession,
  detachTagFromPhrase
);

module.exports = router;
