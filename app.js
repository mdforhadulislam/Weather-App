const btn = document.querySelector('#btn');


btn.addEventListener('click', function() {
    const cityName = document.querySelector('#input-btn').value;
    let result = document.querySelector('#result');
    let city = document.querySelector('#city');
    let temperature = document.querySelector('#temp');
    let humidity = document.querySelector('#humidity');
    let wind = document.querySelector('#wind');
    let description = document.querySelector('#description');

    // api call 
    if (cityName != '') {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=4678c6c72425604f8bacec0b6b0a7e02')
            .then(response => response.json())
            .then(data => {
                if (data.cod == '404') {
                    result.className = 'weather notFound';
                } else {
                    console.log(data);
                    let temp = Math.round(data.main.temp - 273.15);
                    city.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
                    temperature.innerHTML = `${temp}°C`;
                    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
                    wind.innerHTML = `Wind speed: ${data.wind.speed} km/h`;
                    description.innerHTML = `${data.weather[0].description}`;
                }
            });
        result.className = 'weather';
    }
})
