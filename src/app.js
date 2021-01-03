const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname , "../public");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');

// app.get("/" , (req,res) => {
//     res.send("Welcome")
// })

app.get("/about" , (req,res) => {
    res.render("about")
})

app.get("/weather.html" , (req,res) => {
    res.send("Weather")
})

app.get("*" , (req,res) => {
    res.send("404 ERR! Page")
})

app.listen(port , () =>{
    console.log(`I am running on ${port}`);
})