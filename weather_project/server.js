const express=require("express")
const bodyParser=require("body-parser")
const https=require("https")
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.render('index');
})

app.post("/", (req,res)=>{
    const city=req.body.name;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6b3de2ec2685742d20601e3b7052fb7b";
    https.get(url,(response)=>{
        response.on("data",(data)=>{
            data=JSON.parse(data);
            const description=data.weather[0].description;
            const temperature=data.main.feels_like;
            const icon=data.weather[0].icon;
            res.render("weather", {desc: description,temp:temperature});
        })
    })    
})


app.listen(3000,()=>{
    console.log("server opened on port 3000")
})