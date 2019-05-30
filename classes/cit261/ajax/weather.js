var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=brasilia,br&units=imperial&APPID=0a745dde654e210f2ff1f4a49e707afa';
//q=brasilia,br
//XMLHttpRequest is a built in browser tool. Establish connection with URL and lets send and store data.
var request = new XMLHttpRequest();

//tell browser to go to URL and get JSON data. Use GET to get data. second parameter is URL you want to get.
request.open('GET', requestURL, true);
request.send();

request.onload = function () {

    var brazilWeather = JSON.parse(request.responseText);
    console.log(brazilWeather);

    document.getElementById('cweather').innerHTML = brazilWeather.main.temp;
    document.getElementById('humidity').innerHTML = brazilWeather.main.humidity;
    document.getElementById('icon').innerHTML = brazilWeather.main.humidity;
}