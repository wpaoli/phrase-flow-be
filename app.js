const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const session = require("express-session");
// const { checkSession } = require("./controllers/checkSession");

const app = express();

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// app.use(checkSession);

// router import
const user = require("./routes/userRoute");
const phrase = require("./routes/phraseRoute");

app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use("/api", user);
app.use("/api", phrase);

// simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to the application. Create a user at /api/register with email: and password:",
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
