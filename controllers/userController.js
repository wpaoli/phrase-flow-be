const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { User } = require("../models");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log({ name, email, password });
    res.status(400);
    throw new Error("please add all fields");
  }
  //Check if exists
  const userExists = await User.findOne({ where: { email: email } });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(200).json({
      //not sure why this has a underscore
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email in the DB
  const user = await User.findOne({ where: { email: email } });

  // Check to see if their password matches what's in the db
  if (user && (await bcrypt.compare(password, user.password))) {
    // Store user ID in the session
    req.session.user = { id: user.id };
    console.log(req.session);

    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    console.log("Welcome ", user.name);
  } else {
    res.status(400);
    throw new Error("Invalid Creds");
  }
});

const logout = asyncHandler(async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out");
    } else {
      return res.send("Logout successful");
    }
  });
});

//THIS CAN BE REMOVED FROM THIS BRANCH
//Generate JWT
//OK this is working but I dont get exactly how this works.
//It generates the token and sends it to the user.
//Its stateless, it can just tell if its valid or not based on the JWT Secret
//It also contains the expiry date in the token itself.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  register,
  login,
  logout,
};
