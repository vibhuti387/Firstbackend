require('dotenv').config()

const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("hello you are at home page ");
})
app.get('/twitter',(req,res)=>{
    res.send("TWITTER RN");
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login right there</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log("RUNNNINGGG!!!");
})