const express = require("express");
const app = express();
const { uuid } = require('uuidv4');
const bookRouter = express.Router();

bookRouter.get('/books', (req,res)=>{
    try {
        res.json({
            statusCode : "sucess",
            data : "get all books"
        })
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }
} )

bookRouter.post('/book',(req,res)=>{
    try {
        res.json({
            statusCode : "sucess",
            data : "create all books"
        })
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }  
})


bookRouter.put('/book',(req,res)=>{
    try {
        res.json({
            statusCode : "sucess",
            data : "put all books"
        })
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }  
})

bookRouter.delete('/book',(req,res)=>{
    try {
        res.json({
            statusCode : "sucess",
            data : "delete all books"
        })
    } catch (error) {
        console.log(error);
        res.json(error.message)
    }  
})

module.exports = bookRouter