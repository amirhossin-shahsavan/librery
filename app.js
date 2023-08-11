const express = require("express");
const dotenv  =  require("dotenv").config()
const app = express()
const port = process.env.PORT


const MONGO_URI = "http://127.0.0.1:27017/library/"

app.use(express.json())
append.listen(PORT,()=>{
    console.log(`run on port ${port}`);
})