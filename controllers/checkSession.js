const asyncHandler = require("express-async-handler");
const { User } = require("../models");

const checkSession = asyncHandler(async (req, res, next) => {
  console.log("checkSession happening");

  if (req.session && req.session.user) {
    try {
      // Get user from the session
      req.user = await User.findOne({
        where: { id: req.session.user.id },
        attributes: { exclude: ["password"] },
      });

      if (!req.user) {
        throw new Error("User not found");
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no session");
  }
});

module.exports = { checkSession };
