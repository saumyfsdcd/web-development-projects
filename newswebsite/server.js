const express = require("express")
var favicon = require('serve-favicon')
const bodyparser = require("body-parser")
const axios = require('axios').default;
const ejs = require('ejs')
const app = express();
app.set('view engine', 'ejs')

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(__dirname+ '/public'));



app.get('/', (req, res) => {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9ea06ae2fb5a417696ee8fb02fd167e8&pageSize=10&page=1')
  .then(function (response) {
    const articles=response.data.articles
    res.render('index', {articles: articles});
  })    
})

app.get('/health',(req,res)=>{
  axios.get('https://newsapi.org/v2/top-headlines?&country=in&category=health&apiKey=9ea06ae2fb5a417696ee8fb02fd167e8&pageSize=10&page=1')
  .then(function(response){
    const article=response.data.articles;
    res.render('health',{articles:article})
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.post('/query',(req,res)=>{
  const query=req.body.query;
  console.log(query);
  axios.get("https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=9ea06ae2fb5a417696ee8fb02fd167e8&pageSize=10&page=1")
  .then(function(response){
    const article=response.data.articles;
    res.render('query', {articles: article})
  })
})


app.get("/science", (req,res)=>{
  axios.get('https://newsapi.org/v2/top-headlines?&country=in&category=science&apiKey=9ea06ae2fb5a417696ee8fb02fd167e8&pageSize=10&page=1')
  .then(function(response){
    const article=response.data.articles;
    res.render('science',{articles:article})
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.get("/sports", (req,res)=>{
  axios.get('https://newsapi.org/v2/top-headlines?&country=in&category=sports&apiKey=9ea06ae2fb5a417696ee8fb02fd167e8&pageSize=10&page=1')
  .then(function(response){
    const article=response.data.articles;
    res.render('sports',{articles:article})
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server started on port 3000");
})

// 9ea06ae2fb5a417696ee8fb02fd167e8