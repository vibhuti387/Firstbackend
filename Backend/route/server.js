const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("at home page");
})
app.get('/api/information',(req,res)=>{
    const arr=[
        {
           id:1,
           name:'vibhut' 
        },
        {
           id:2,
           name:'shivji' 
        },
        {
           id:3,
           name:'radha' 
        },
        {
           id:4,
           name:'krishna' 
        }

    ];
    res.send(arr);
})
const port=process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("server is running");
})