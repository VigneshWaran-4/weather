document.addEventListener('DOMContentLoaded', function() {
    const locationSelect = document.getElementById('location');
    const temperatureDisplay = document.getElementById('temperature');

    locationSelect.addEventListener('change', function() {
        const selectedLocation = locationSelect.value;
        fetchTemperature(selectedLocation);
    });

    function fetchTemperature(location) {
        // You can replace this with your API call to get the temperature for the selected location
        // For simplicity, I'm just displaying a random temperature between 0 and 40 degrees Celsius
        const temperature = Math.floor(Math.random() * 41);
        temperatureDisplay.textContent = temperature + "°C";
    }
    
    // Fetch temperature for the initial selected location
    fetchTemperature(locationSelect.value);
});
