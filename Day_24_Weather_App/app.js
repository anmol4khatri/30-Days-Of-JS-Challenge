const API_KEY = 'API_KEY'; // Hiding API key due to privacy.
                           // Replace with your OpenWeatherMap API key.
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const weatherIcon = document.getElementById('weatherIcon');
const forecast = document.getElementById('forecast');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
        fetchForecastData(city);
    }
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        console.log('Current Weather Data:', data);
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

async function fetchForecastData(city) {
    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        console.log('Forecast Data:', data);
        displayForecastData(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

function displayForecastData(data) {
    forecast.innerHTML = '';
    for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(day.main.temp);
        const icon = day.weather[0].icon;

        const forecastDay = document.createElement('div');
        forecastDay.classList.add('text-center', 'p-4', 'bg-gray-700', 'rounded-lg', 'hover:bg-gray-600', 'transition', 'duration-300', 'ease-in-out', 'transform', 'hover:scale-105');
        forecastDay.innerHTML = `
            <p class="font-semibold mb-2">${dayName}</p>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" class="w-16 h-16 mx-auto">
            <p class="text-2xl font-bold">${temp}°C</p>
        `;
        forecast.appendChild(forecastDay);
    }
}