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
    randomizer();
    console.log("fetching for node")
  const blogsPath = path.join(pathToContent ,'blogs.json');
  const blogs = fs.readFileSync(blogsPath,'utf-8');
  res.send({data:JSON.parse(blogs)})
  

})

App.get("/api/portfolios",(req,res)=>{
    const portfoliosPath = path.join(pathToContent,'portfolio.json');
    const portfolios = fs.readFileSync(portfoliosPath,'utf-8');
    res.send({data:JSON.parse(portfolios)})

   
 })
function startServer(){
 
App.listen({port},()=>{
    console.log("express server running on 3001")
})
}

startServer()



