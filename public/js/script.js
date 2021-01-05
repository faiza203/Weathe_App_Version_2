const body = document.getElementsByTagName("body");
const btn = document.getElementById("submit-button");
const city = document.getElementById("weather-city");
const message = document.getElementById("city-name")

const id = body[0].id;

btn.addEventListener("click", async (e)=> {
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