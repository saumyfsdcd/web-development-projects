const express=require("express")
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/add",(req,res)=>{
    res.sendFile(__dirname+"/addition.html")
})

app.get("/multi",(req,res)=>{
    res.sendFile(__dirname+"/multiplication.htm")
})

app.get("/division",(req,res)=>{
    res.sendFile(__dirname+"/divide.html")
})

app.get("/subtract",(req,res)=>{
    res.sendFile(__dirname+"/subtract.html")
})

app.post("/add", (req,res)=>{
    n=parseInt(req.body.num1);
    s=parseInt(req.body.num2);
    sum=n+s;
    res.send("the addition of these two number is "+sum)
})

app.post("/divide", (req,res)=>{
    n=parseInt(req.body.num1);
    s=parseInt(req.body.num2);
    sum=n/s;
    res.send("the division of these two number is "+sum)
})

app.post("/subtract", (req,res)=>{
    n=parseInt(req.body.num1);
    s=parseInt(req.body.num2);
    sum=n-s;
    res.send("the subtraction of these two number is "+sum)
})

app.post("/multiply", (req,res)=>{
    n=parseInt(req.body.num1);
    s=parseInt(req.body.num2);
    sum=n*s;
    res.send("the multiplication of these two number is "+sum)
})

app.listen(3000,()=>{
    console.log("server started on the port 3000")
});
