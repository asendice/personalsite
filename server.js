const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// //import Routes
const authRoutes = require("./routes/auth");

//app
const app = express();

const whitelist = ["http://localhost:3000", "https://dylantravisportfolio.herokuapp.com/api"];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(!new Error("Not allowed by CORS "));
    }
  },
};
//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"));

//middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api", authRoutes);

// need for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}


const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is live on port", port);
});
