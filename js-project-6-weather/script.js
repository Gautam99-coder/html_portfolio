const API_KEY = "YOUR_API_KEY_HERE";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const status = document.getElementById("status");
  const weatherDiv = document.getElementById("weather");

  if (!city) return;

  status.innerText = "Loading...";
  weatherDiv.innerHTML = "";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    weatherDiv.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Condition: ${data.weather[0].main}</p>
    `;

    status.innerText = "";
  } catch (err) {
    status.innerText = err.message;
  }
}
