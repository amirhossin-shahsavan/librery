const express = require("express");
const app = express();
const bookRouter = require('./routes/bookRoutes');


app.use('/api/v1/',bookRouter)

app.listen(3000,()=>{
    console.log('server is run on port 3000');
})