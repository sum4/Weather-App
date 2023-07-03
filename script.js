const apiKey = "0a1a2d328ba19b1ec3a10147cbb25fa9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="./images/clear.png" ;
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="./images/drizzle.png" ;
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./images/rain.png" ;
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="./images/mist.png" ;
    }
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src="./images/humidity.png" ;
    }

}

SearchBtn.addEventListener("click", ()=>{
    checkWeather(SearchBox.value);

})
