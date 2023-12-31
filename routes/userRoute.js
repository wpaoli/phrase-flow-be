const express = require("express");

const router = express.Router();
const {
  register,
  login,
  logout,
  updateSignUp,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  deleteAllUsers,
} = require("../controllers/userController");
// const { checkToken } = require("../controllers/checkToken");
const { checkSession } = require("../controllers/checkSession");

//Routes
//All of these are prefaced with /api/ (see app.js)
router.post("/register", register);

//Realizing that there is no point in logging in if you cant log out
//Removing the token from the client seems decent enough for me, for now.
//https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens
//https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/

router.post("/login", login);
router.post("/logout", checkSession, logout);
//If you forget yer password, yer screwed right now lol

module.exports = router;
