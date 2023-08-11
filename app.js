const express = require("express");
const mongoose = require("mongoose");
const dotenv  =  require("dotenv").config()
const app = express()

const MONGODB_URI = "mongodb://127.0.0.1:27017/library"
const authRouter = require("./routes/authRouter")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",authRouter)
mongoose
  .connect(MONGODB_URI)
  .then((connection) => {
    console.log(`connecting to mongodb ${MONGODB_URI}`);
  })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`app running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
