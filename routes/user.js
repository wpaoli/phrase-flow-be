const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateSignUp,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  deleteAllUsers,
} = require("../controllers/user");

//Routes
//All of these are prefaced with /api/ (see app.js)
router.post("/users", registerUser);

// router.put("/sign-up/:id", updateSignUp);

// router.get("/sign-up/", getAllUsers);

// router.get("/sign-up/:id", getSingleUser);

// router.delete("/sign-up/:id", deleteSingleUser);

// router.delete("/sign-up/", deleteAllUsers);

// -------------------------EXPORT ROUTER-------------------------
module.exports = router;
