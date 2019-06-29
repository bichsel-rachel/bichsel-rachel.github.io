function startOver() {
    sessionStorage.clear();
    var input = '<form><label for="fname">Enter a First Name</label><br /><input type="text" name="fName"/><br /><label for="zipCode">Enter a Zip Code in the United States</label><br /><input type="text" name="zipCode"/><button type="button" onclick="start()">Begin</button></form>';
    document.getElementById("main-container").innerHTML = input;
}

//precede to Level One
function levelOne() {

    var fName = document.getElementById('fName').value;
    var zip = document.getElementById('zipCode').value;

    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=0a745dde654e210f2ff1f4a49e707afa';
   
    
    //console.log(requestURL);
    var request = new XMLHttpRequest();

    
    //HXMLHttopRequest.open(method, url, async, user, password)
    //can do methods like GET, POST, PUT, DELETE, etc.
    request.open('GET', requestURL);
    //send request to server
    request.send();

    var cityWeather = JSON.parse(request.responseText);
    console.log(cityWeather);

    var cityName = cityWeather.name;
    var cityDesc = cityWeather.weather.main;
    var cityTemp = cityWeather.main.temp;
    
    var user = {
        fName : fName,
        cityName: cityName,
        cityDesc: cityDesc,
        cityTemp: cityTemp    
    };
    
    sessionStorage.setItem('user', JSON.stringify(user));
    var retrievedData = sessionStorage.getItem('user');
    var userInfo = JSON.parse(retrievedData);

    document.getElementById("main-container").innerHTML = "";
    var newPara = document.createElement("p");
    var text = document.createTextNode("This is a new paragraph element that was not previously here.");
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);
}

function levelTwo() {

}

function levelThree() {

}
