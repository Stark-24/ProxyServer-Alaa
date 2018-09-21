const express = require("express");
const parser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const router = require("./routes.js");
const cors = require("cors");
const PORT = 9000;

//Express Application
const app = express();

//Middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../static/")));
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Starkloud!" });
});

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
