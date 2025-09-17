const apiKey = "454e9bdb23254026a7e181623251709";

async function getTemperature() {
    const location = document.getElementById("locationInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!location) {
        resultDiv.innerHTML = "<p>Please enter a location.</p>";
        return;
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = `<p>${data.error.message}</p>`;
            return;
        }

        const tempC = data.current.temp_c;
        resultDiv.innerHTML = `<p>🌡️ Current temperature in <strong>${data.location.name}</strong> is <strong>${tempC}°C</strong></p>`;
    } catch (error) {
        resultDiv.innerHTML = "<p>Unable to fetch temperature data.</p>";
        console.error("Error fetching data:", error);
    }
}