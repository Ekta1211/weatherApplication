const apiKey = "117f9512b15c170873a3be30f04777bf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.icon');

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data =await response.json();

    // console.log(data);

    document.querySelector('.cityName').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == 'Haze'){
        icon.src = "images/haze.png"
    }
    else if(data.weather[0].main == 'Clear'){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main == 'Clouds'){
        icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == 'Rain'){
        icon.src = "images/rain.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        icon.src = "images/haze.png"
    }
    else if(data.weather[0].main == 'Mist'){
        icon.src = "images/mist.png"
    }

    document.querySelector('.weather').style.display = 'block';
    

}

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    checkWeather(searchBox.value);
})
