const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models").User;

const checkToken = asyncHandler(async (req, res, next) => {
  console.log("checkToken happening");
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      console.log(req.headers.authorization);
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded.id);
      // //Get user from the token

      req.user = await User.findOne({
        where: { id: decoded.id },
        attributes: { exclude: ["password"] },
      });

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
module.exports = { checkToken };
