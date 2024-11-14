import express from "express";

const app=express();
const myname=(req,res,next)=>{
    console.log("this is app level middleware");
    req.myname="yashwant";
    next();
} 
app.use(myname);
app.get("/",(req,res,next)=>{
    console.log("Home page")
    console.log(req.myname);
    res.send("hello home page"+req.myname)
})
app.listen(8000,()=>{
    console.log("server run on 8000")
})

