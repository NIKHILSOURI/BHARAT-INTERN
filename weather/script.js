document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '4fbb7652d81129ada87f091dff6698ba'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
        });

    function displayWeather(data) {
        const weatherInfo = document.querySelector('.weather-info');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;

        weatherInfo.innerHTML = `
            <h2>${cityName}</h2>
            <p>Temperature: ${temperature} &deg;C</p>
            <p>Weather: ${description}</p>
        `;
    }
});
