const Phrase = require("../models").Phrase;
const User = require("../models").User;
const asyncHandler = require("express-async-handler");

const addPhrase = asyncHandler(async (req, res) => {
  const { phrase, definition } = req.body;
  // I think I need to look up the logged in user here
  //ANSWER: It comes form the middleware, check token.
  const userId = req.user.id; // assuming req.user is the logged in user

  console.log(req.body);

  //   console.log(req.body);
  Phrase.create({
    userId,
    phrase,
    definition,
  })
    .then((phrase) => {
      return res.status(201).json({
        message: "Phrase created successfully",
        phrase,
        definition,
      });
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
});

const getPhrases = asyncHandler(async (req, res) => {
  const phrases = await Phrase.findAll({ user: req.user.id });
  res.status(200).json(phrases);
});

module.exports = {
  addPhrase,
  getPhrases,
};
