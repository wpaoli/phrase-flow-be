const Tag = require("../models").Tag;
const asyncHandler = require("express-async-handler");

const addTag = asyncHandler(async (req, res) => {
  const { tag_name } = req.body;

  //Check if exists
  const tagExists = await Tag.findOne({ where: { tag_name: tag_name } });

  if (tagExists) {
    res.status(400);
    throw new Error("Tag already exists");
  }

  try {
    const newTag = await Tag.create({
      tag_name,
    });

    return res.status(201).json({
      message: "Tag created successfully",
      tag_name: tag_name,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = {
  addTag,
};
