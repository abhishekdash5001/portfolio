/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react-hooks/rules-of-hooks */
const express = require("express");

const fs = require("fs");
const path = require("path");
const randomizer = require('./randomizer');
const port = 3001;
const pathToContent = path.join(__dirname,"content");
const App = express();

App.use(express.json())

App.get("/",(req,res)=>{
    res.json({
        message:"hi"
    })
})

App.get("/api/blogs",(req,res)=>{
    randomizer();
  const blogsPath = path.join(pathToContent ,'blogs.json');
  const blogs = fs.readFileSync(blogsPath,'utf-8')
    setTimeout(()=>{
        res.send({data:JSON.parse(blogs)})
    },2000)

})

App.get("/api/portfolios",(req,res)=>{
    const portfoliosPath = path.join(pathToContent,'portfolio.json');
    const portfolios = fs.readFileSync(portfoliosPath,'utf-8');

    setTimeout(()=>{
        res.send({data:JSON.parse(portfolios)})
    },3000)
   
 })
function startServer(){
 
App.listen({port},()=>{
    console.log("express server running on 3001")
})
}

startServer()



