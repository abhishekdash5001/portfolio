/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react-hooks/rules-of-hooks */
const express = require("express")
const port = 3001;
const blogs  = require("./content/blogs.json");
const portfolio  = require("./content/portfolio.json")

const App = express();

App.use(express.json())

App.get("/",(req,res)=>{
    res.json({
        message:"hi"
    })
})

App.get("/api/blogs",(req,res)=>{
    setTimeout(()=>{
        res.send({data:blogs})
    },2000)

})

App.get("/api/portfolios",(req,res)=>{
    setTimeout(()=>{
        res.send({data:portfolio})
    },3000)
   
 })
function startServer(){
 
App.listen({port},()=>{
    console.log("express server running on 3001")
})
}

startServer()



