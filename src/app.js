const hbs = require("hbs");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname, "../public");
const hbsPath = path.join(__dirname, "../views");
require("dotenv").config({
    path: __dirname + "\\.env",
});

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', hbsPath);
hbs.registerPartials(hbsPath);

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})
function replaceId(app , value){
    const result = app.replace(value);
    return result
}
app.get("/weather", (req, res) => {
    res.render("weather" , {
         apiId : process.env["WEATHER_API_TOKEN"]
    })
})

app.get("*", (req, res) => {
    res.render("err")
})

app.listen(port, () => {
    console.log(`I am running on ${port}`);
})



