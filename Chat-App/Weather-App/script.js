async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        document.getElementById("weatherResult").innerHTML = "Please enter city name";
        return;
    }

    const apiKey = "deeab5d2c53e8e822f5981c47045be15";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        // if city wrong
        if (data.cod == "404") {
            document.getElementById("weatherResult").innerHTML = "City not found";
            return;
        }

        // show weather
        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🌥 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
    }
}