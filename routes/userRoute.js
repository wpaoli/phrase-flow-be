const express = require("express");

const router = express.Router();
const {
  register,
  login,
  updateSignUp,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  deleteAllUsers,
} = require("../controllers/userController");
const { checkToken } = require("../controllers/checkToken");

//Routes
//All of these are prefaced with /api/ (see app.js)
router.post("/register", register);

router.post("/login", checkToken, login);

// router.put("/sign-up/:id", updateSignUp);

// router.get("/sign-up/", getAllUsers);

// router.get("/sign-up/:id", getSingleUser);

// router.delete("/sign-up/:id", deleteSingleUser);

// router.delete("/sign-up/", deleteAllUsers);

// -------------------------EXPORT ROUTER-------------------------
module.exports = router;
