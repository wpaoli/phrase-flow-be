const Tag = require("../models").Tag;
const User = require("../models").User;
const asyncHandler = require("express-async-handler");

const addTag = asyncHandler(async (req, res) => {
  const { tag_name } = req.body;
  const userId = req.user.id;
  console.log(tag_name);

  //Check if exists
  const tagExists = await Tag.findOne({ where: { tag_name: tag_name } });

  if (tagExists) {
    res.status(400);
    throw new Error("Tag already exists");
  }

  try {
    const newTag = await Tag.create({
      tag_name,
      userId,
    });

    return res.status(201).json({
      message: "Tag created successfully",
      newTag,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const getTags = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  console.log(userId);
  const tags = await Tag.findAll({
    include: [
      {
        model: User,
        where: { id: userId }, // Replace 'userId' with the actual user ID
        attributes: {
          exclude: ["password", "email", "name", "createdAt", "updatedAt"],
        },
      },
    ],

    group: ["Tag.id"], // Group by Tag ID to get unique tags
  });
  res.status(200).json(tags);
});

module.exports = {
  addTag,
  getTags,
};
