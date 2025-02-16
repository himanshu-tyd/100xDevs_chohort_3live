import express from "express";

const app=express()
const port=3001


app.get("/", (req,res)=>{
    res.send('hello there')
})

app.listen(port ,()=>{
    console.log('server is running')
})