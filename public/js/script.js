const body = document.getElementsByTagName("body");
const btn = document.getElementById("submit-button");
const city = document.getElementById("weather-city");
const message = document.getElementById("city-name")
const id = body[0].id;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (city.value.trim() === "") {
        message.innerText = "Please! Add City Before Search"
    }
})