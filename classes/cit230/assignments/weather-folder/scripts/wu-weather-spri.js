var requestURL = '//api.wunderground.com/api/2bd3e0c1308e8f04/conditions/q/OR/Springfield.json';
/** to do both in one, combine in URL http://api.wunderground.com/api/...API key.../conditions/forecast/q/MN/Franklin.json **/


var request = new XMLHttpRequest();


request.open('GET', requestURL, true);
request.send();



request.onload = function () {

    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);

    document.getElementById('cweather').innerHTML = franklinWeather.current_observation.weather;

    document.getElementById('ctemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('wind').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;

    var icon_path = franklinWeather.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);

    if (found >= 0) {
        icon_path = icon_path.replace("http", "https");
    }
    document.getElementById('w_icon').src = icon_path;
}


var requestSec = new XMLHttpRequest();

requestSec.open('GET', '//api.wunderground.com/api/2bd3e0c1308e8f04/forecast/q/OR/Springfield.json', true);
requestSec.send();

requestSec.onload = function () {

    var franklinForecast = JSON.parse(requestSec.responseText);
    console.log(franklinForecast);
    document.getElementById('forecastInfo').innerHTML = franklinForecast.forecast.txt_forecast.forecastday["0"].fcttext;

}

