const apiKey="ea4c70e22570ca181e64b77ca94941b6";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units={metric}&q="

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search i");
const weatherIcon=document.querySelector(".wheather-icon");
async function checkWeather(city)
{
    const res=await fetch(apiurl + city +`&appid=${apiKey}`);
    if(res.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } 
    else{  
    var data=await res.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °C";
    document.querySelector(".humidity").innerHTML=data.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="image/cloudy(2).png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="image/clear-sky.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="image/rain.png"
    }
    else if(data.weather[0].main=="Storm")
    {
        weatherIcon.src="image/storm.png"
    }
    else if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="image/cloudy(2).png"
    }
    else if(data.weather[0].main=="Sunny")
    {
        weatherIcon.src="image/sun.png"
    }
    document.querySelector(".weather").style.display=block;
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
})