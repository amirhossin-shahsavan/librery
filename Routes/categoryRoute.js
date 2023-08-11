const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const app = express();

router.get("/api/v1/category",(req,res)=>{
    res.send("category")
});