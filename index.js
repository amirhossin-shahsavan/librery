const express = require("express");
const app = express();


app.get('/a',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log('server is run on port 3000');
})