const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/" , (req,res) => {
    res.send("Welcome")
})

app.get("/about" , (req,res) => {
    res.send("I am a developer")
})

app.get("/weather" , (req,res) => {
    res.send("Weather")
})

app.get("*" , (req,res) => {
    res.send("404 ERR! Page")
})

app.listen(port , () =>{
    console.log(`I am running on ${port}`);
})