const body = document.getElementsByTagName("body");
const btn = document.getElementById("submit-button");
const city = document.getElementById("weather-city");
const message = document.getElementById("city-name")
const day = document.getElementById("day");
const date = document.getElementById("date");

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
            // console.log(data);
            console.log(data);
        } catch {
            message.innerText = "Add City Name Properly ";
        }
    } else {
        message.innerText = "Add City Name Before Search";
    }
})