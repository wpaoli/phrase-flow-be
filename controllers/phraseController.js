const Phrase = require("../models").Phrase;
const asyncHandler = require("express-async-handler");

const addPhrase = asyncHandler(async (req, res) => {
  const { phrase, definition, frequency } = req.body;
  const userId = req.user.id;

  try {
    const newPhrase = await Phrase.create({
      userId,
      phrase,
      definition,
      frequency,
    });

    return res.status(201).json({
      message: "Phrase created successfully",
      phrase: newPhrase,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const updatePhrase = asyncHandler(async (req, res) => {
  const { phrase, definition, frequency } = req.body;
  const id = req.params.id;

  try {
    const foundPhrase = await Phrase.findOne({ where: { id: id } });

    if (!foundPhrase) {
      return res.status(206).json({ message: "Phrase not found" });
    }

    const updatedPhrase = await foundPhrase.update({
      phrase,
      definition,
      frequency,
    });

    return res.status(202).json({
      message: "Phrase updated successfully",
      updatedPhrase,
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});

const getPhrases = asyncHandler(async (req, res) => {
  const phrases = await Phrase.findAll({
    where: {
      userId: req.user.id,
    },
  });
  res.status(200).json(phrases);
});

module.exports = {
  addPhrase,
  getPhrases,
  updatePhrase,
};
