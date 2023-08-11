const express = require("express");
const dotenv  =  require("dotenv").config()
const app = express()
const PORT = process.env.PORT


const MONGODB_URI = "mongodb://127.0.0.1:27017/library/"

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGODB_URI)
  .then((connection) => {
    console.log(`connecting to mongodb ${MONGODB_URI}`);
  })
  .then((result) => {
    app.listen(Port, () => {
      console.log(`app running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
