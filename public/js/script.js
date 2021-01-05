const body = document.getElementsByTagName("body");
const btn = document.getElementById("submit-button");
const city = document.getElementById("weather-city");
const message = document.getElementById("city-name")
const day = document.getElementById("day");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const weathercon = document.getElementById("temp-status");

const id = body[0].id;
const currentDate = new Date();
const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];
const month = [
    "Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec",
];
day.innerText = days[currentDate.getDay() - 1]
date.innerText = `${currentDate.getDate()} ${month[currentDate.getMonth()]}`
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (city.value.trim() !== "") {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${id}`;
            const response = await fetch(url);
            const data = await response.json();
            const tempStatus = data.weather[0].main;
            temp.innerText = parseInt(data.main.temp) - 274 + " °C";
            message.innerText = data.name + " , " + data.sys.country;
            if (tempStatus == "Sunny") {
                weathercon.innerHTML =
                    "<i class='fas fa-2x  fa-sun'></i>";
            } else if (tempStatus == "Clouds") {
                weathercon.innerHTML =
                    " <i class='fas fa-2x  fa-cloud'></i>";
            } else if (tempStatus == "Rainy") {
                weathercon.innerHTML =
                    " <i class='fas fa-2x  fa-cloud-rain'></i>";
            } else {
                weathercon.innerHTML =
                    " <i class='fas  fa-2x fa-cloud'></i>";
            }
        } catch {
            message.innerText = "Add City Name Properly ";
            temp.innerText = "";
            weathercon.innerHTML = "";
        }
    } else {
        message.innerText = "Add City Before Search";
        temp.innerText = "";
        weathercon.innerHTML = "";
    }
})