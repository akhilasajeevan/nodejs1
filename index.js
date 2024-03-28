

const express=require("express")
const app=express()
require('dotenv').config()
app.get("/",(req,res)=>{res.send("hello world")})

app.get("/about",(req,res)=>{res.send("This is about new page")})
app.get("/help",(req,res)=>{res.send("page for help")})
app.get("/profile",(req,res)=>{res.send("Profile page")})
app.listen(process.env.PORT,()=>{console.log(`Server is running on ${process.env.PORT}`)})









// app.listen(4000,()=>{console.log("server is running on port 4000")})


// const server=express.createServer((req,res)=>{
//     res.write('Hello hai!');
//     res.write("halloooo world")
//     res.end();
//   }).listen(4000);
  
// const os  =require("os")
// const totalmemory=os.totalmem()
// const freememory=os.freemem()
// console.log(`total memory is ${totalmemory}`)
// console.log(`free memory space is ${freememory}`)