//#region IMPORTS
    const express = require('express');
    const dotenv = require('dotenv').config();
    
    const port = process.env.PORT || 5000;
//#endregion

const app = express();


app.get('/',(req,res)=>{
    console.log("wasuup");
    res.render("hello, welcome")
})

console.log("Hi everyone.")

app.listen(port,()=>{
    console.log("Listening on port 3000");
})