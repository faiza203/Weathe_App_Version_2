const http = require("http")
const requests = require("requests");
require("dotenv").config({
    path: __dirname + "/.env",
});
const submitBtn = (e) => {
    console.log(e);
}

const port = 8000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        requests(
            `http://api.openweathermap.org/data/2.5/weather?q=Faisalabad&appid=${process.env["WEATHER_API_TOKEN"]}`
        )
            .on("data", (chunk) => {
                console.log(chunk);
                // const chunkStr = JSON.parse(chunk);
                // const data = [chunkStr];
                // const realTimeData = data
                //     .map((tem) => replaceval(htmlFile, tem))
                //     .join("");
                // res.end(realTimeData);
            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();
            });
    }
});
server.listen(port, () => {
    console.log(`Server is started at ${port}`);
});
