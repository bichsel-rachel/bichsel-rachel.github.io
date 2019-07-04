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


    console.log(requestURL);

    var request = new XMLHttpRequest();


    //HXMLHttopRequest.open(method, url, async, user, password)
    //can do methods like GET, POST, PUT, DELETE, etc.
    request.open('GET', requestURL, false);
    //send request to server
    request.send();

    var cityWeather = JSON.parse(request.responseText);
    console.log("Result" + cityWeather);

    var cityName = cityWeather.name;
    var cityDesc = cityWeather.weather[0].main;
    var cityTemp = cityWeather.main.temp;

    var user = {
        fName: fName,
        cityName: cityName,
        cityDesc: cityDesc,
        cityTemp: cityTemp
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    var retrievedData = sessionStorage.getItem('user');
    var userInfo = JSON.parse(retrievedData);
    console.log(userInfo);
    
     //clear previous code
    document.getElementById("main-container").innerHTML = "";
    var newPara = document.createElement("p");
    var text = document.createTextNode('The sky is ' + user.cityDesc + '  in ' + user.cityName + '. ' + user.fName + ' is walking down the street when a door randomly opens in a nearby old house. An old lady calls out and asks if ' + user.fName + ' can help her for one minute. Being such a good person, ' + user.fName + ' quickly walks into the house to assist the woman. Right as ' + user.fName + ' steps in, the door closes and totals blackness is all that can be seen. A low laugher erupted behind, "You can only get out if you solve my three puzzles. If not, you are stuck here forever!!"a');
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);

    var header = document.createElement("h1");
    var headText = document.createTextNode("Riddle #1");
    header.appendChild(headText);
    document.getElementById("main-container").appendChild(header);

    var newPara2 = document.createElement("p");
    var text2 = document.createTextNode('What can travel around the world while staying in a corner?');
    newPara2.appendChild(text2);
    document.getElementById("main-container").appendChild(newPara2);

    var form = document.createElement("form");
    form.setAttribute("id", "myForm");
    form.setAttribute("name", "answer");
    document.getElementById("main-container").appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer");
    input.setAttribute("name", "answer");
    document.getElementById("myForm").appendChild(input);

    var createButton = document.createElement("button");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("onclick", 'testAnswer(document.getElementById("answer").value)');
    var button = document.createTextNode('Check Answer');
    createButton.appendChild(button);
    document.getElementById("myForm").appendChild(createButton);

}

function testAnswer(answer) {
    console.log(answer);
    if (answer == "stamp" || answer == "Stamp") {
        var par = document.createElement("p");
        var parText = document.createTextNode("Correct!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);


        var nextLevel = document.createElement("button");
        nextLevel.setAttribute("type", "button");
        nextLevel.setAttribute("onclick", "levelTwo()");
        var buttonText = document.createTextNode('Contine to Level 2');
        nextLevel.appendChild(buttonText);
        document.getElementById("main-container").appendChild(nextLevel);
    } else {
        var par = document.createElement("p");
        var parText = document.createTextNode("False! Try Again!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);

    }
}


function levelTwo() {
     //clear previous level code
    document.getElementById("main-container").innerHTML = "";
    var header = document.createElement("h1");
    var headText = document.createTextNode("Riddle #2");
    header.appendChild(headText);
    document.getElementById("main-container").appendChild(header);
    
     var newPara = document.createElement("p");
    var text = document.createTextNode("Say my name and I disappear. What am I?");
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);
    
    var form = document.createElement("form");
    form.setAttribute("id", "myForm");
    document.getElementById("main-container").appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer");
    input.setAttribute("name", "answer");
    document.getElementById("myForm").appendChild(input);

    var createButton = document.createElement("button");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("onclick", 'testAnswerTwo(document.getElementById("answer").value)');
    var button = document.createTextNode('Check Answer');
    createButton.appendChild(button);
    document.getElementById("myForm").appendChild(createButton);
    
}

function testAnswerTwo(answer) {
    console.log(answer);
    if (answer == "silence" || answer == "Silence") {
        var par = document.createElement("p");
        var parText = document.createTextNode("Correct!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);


        var nextLevel = document.createElement("button");
        nextLevel.setAttribute("type", "button");
        nextLevel.setAttribute("onclick", "levelThree()");
        var buttonText = document.createTextNode('Contine to Level 3');
        nextLevel.appendChild(buttonText);
        document.getElementById("main-container").appendChild(nextLevel);
    } else {
        var par = document.createElement("p");
        var parText = document.createTextNode("False! Try Again!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);

    }
}


function levelThree() {
    //clear previous level code
    document.getElementById("main-container").innerHTML = "";
    
    var header = document.createElement("h1");
    var headText = document.createTextNode("Riddle #3");
    header.appendChild(headText);
    document.getElementById("main-container").appendChild(header);
    
    var newPara = document.createElement("p");
    var text = document.createTextNode("The one who makes it always sells it. The one who buys it never uses it The one who uses it never knows he's using it. What is it?");
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);
    
    
    var form = document.createElement("form");
    form.setAttribute("id", "myForm");
    document.getElementById("main-container").appendChild(form);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "answer");
    input.setAttribute("name", "answer");
    document.getElementById("myForm").appendChild(input);

    var createButton = document.createElement("button");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("onclick", 'testAnswerThree(document.getElementById("answer").value)');
    var button = document.createTextNode('Check Answer');
    createButton.appendChild(button);
    document.getElementById("myForm").appendChild(createButton);
}

function testAnswerThree(answer) {
    console.log(answer);
    if (answer == "coffin" || answer == "Coffin") {
        var par = document.createElement("p");
        var parText = document.createTextNode("Correct!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);


        var nextLevel = document.createElement("button");
        nextLevel.setAttribute("type", "button");
        nextLevel.setAttribute("onclick", "final()");
        var buttonText = document.createTextNode('Escape!');
        nextLevel.appendChild(buttonText);
        document.getElementById("main-container").appendChild(nextLevel);
    } else {
        var par = document.createElement("p");
        var parText = document.createTextNode("False! Try Again!");
        par.appendChild(parText);
        document.getElementById("main-container").appendChild(par);

    }
}

function final() {
    //clear previous level code
    document.getElementById("main-container").innerHTML = "";

     var retrievedData = sessionStorage.getItem('user');
    var userInfo = JSON.parse(retrievedData);
    console.log(userInfo);
    
    var newPara = document.createElement("p");
    var text = document.createTextNode('The sky is ' + userInfo.cityDesc + '  in ' + userInfo.cityName + '. ' + userInfo.fName + ' is walking down the street when a door randomly opens in a nearby old house. An old lady calls out and asks if ' + userInfo.fName + ' can help her for one minute. Being such a good person, ' + userInfo.fName + ' quickly walks into the house to assist the woman. Right as ' + userInfo.fName + ' steps in, the door closes and totals blackness is all that can be seen. A low laugher erupted behind, "You can only get out if you solve my three puzzles. If not, you are stuck here forever!!"a');
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);
}