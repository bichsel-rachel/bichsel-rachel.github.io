//Go back to Level One
function startOver() {
    sessionStorage.clear();
    window.location.replace("https://bichsel-rachel.github.io/classes/cit261/final/index.html");
//    var input = '<form><label for="fname">Enter a First Name</label><br /><input type="text" name="fName"/><br /><label for="zipCode">Enter a Zip Code in the United States</label><br /><input type="text" name="zipCode"/><button type="button" onclick="start()">Begin</button></form>';
//    document.getElementById("main-container").innerHTML = input;
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
    newPara.setAttribute("class", "p-left");
    var text = document.createTextNode('The sky is ' + user.cityDesc + '  in ' + user.cityName + '. ' + user.fName + ' is walking down the street when a door randomly opens in a nearby old house. An old lady calls out and asks if ' + user.fName + ' can help her for one minute. Being such a good person, ' + user.fName + ' quickly walks into the house to assist the woman.');
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);

    var newPara2 = document.createElement("p");
    newPara2.setAttribute("class", "p-left");
    var text = document.createTextNode('Right as ' + user.fName + ' steps in, the door closes and totals blackness is all that can be seen. A low laugher erupted behind, "You can only get out if you solve my three puzzles. If not, you are stuck here forever!!"');
    newPara2.appendChild(text);
    document.getElementById("main-container").appendChild(newPara2);

    var header = document.createElement("h1");
    var headText = document.createTextNode("Riddle #1");
    header.appendChild(headText);
    document.getElementById("main-container").appendChild(header);

    var newPara2 = document.createElement("p");
    var text2 = document.createTextNode("What can travel around the world while staying in a corner? (don't include 'a' in answer)");
    newPara2.setAttribute("class", "p-left");
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


    var hintButton = document.createElement("button");
    hintButton.setAttribute("type", "button");
     hintButton.setAttribute("class", "hint-button");
    hintButton.setAttribute("onclick", 'hintOne()');
    var buttonText = document.createTextNode('Hint');
    hintButton.appendChild(buttonText);

    document.getElementById("main-container").appendChild(hintButton);

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
        nextLevel.setAttribute("class", "continue-button");
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
    newPara.setAttribute("class", "p-left");
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

    var hintButton = document.createElement("button");
    hintButton.setAttribute("type", "button");
     hintButton.setAttribute("class", "hint-button");
    hintButton.se
    hintButton.setAttribute("onclick", 'hintTwo()');
    var buttonText = document.createTextNode('Hint');
    hintButton.appendChild(buttonText);

    document.getElementById("main-container").appendChild(hintButton);
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
         nextLevel.setAttribute("class", "continue-button");
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
    var text = document.createTextNode("The one who makes it always sells it. The one who buys it never uses it. The one who uses it never knows he's using it. What is it? (don't include 'a' in answer)");
    newPara.setAttribute("class", "p-left");
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
    createButton.setAttribute("class", "blood");
    createButton.setAttribute("type", "button");
    createButton.setAttribute("onclick", 'testAnswerThree(document.getElementById("answer").value)');
    var button = document.createTextNode('Check Answer');
    createButton.appendChild(button);
    document.getElementById("myForm").appendChild(createButton);

    var hintButton = document.createElement("button");
    hintButton.setAttribute("type", "button");
     hintButton.setAttribute("class", "hint-button");
    hintButton.se
    hintButton.setAttribute("onclick", 'hintThree()');
    var buttonText = document.createTextNode('Hint');
    hintButton.appendChild(buttonText);

    document.getElementById("main-container").appendChild(hintButton);
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
         nextLevel.setAttribute("id", "escape");
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
    var text = document.createTextNode('A low laughter comes from behind ' + userInfo.fName + ', "Speaking of a coffin..." ' + userInfo.fName + ' feels breathing inches from behind. A door to the outside opens and ' + userInfo.fName + ' runs into the street outside.');
    newPara.appendChild(text);
    document.getElementById("main-container").appendChild(newPara);

    var running = document.createElement("img");
    running.setAttribute("src", "images/running.png");
    running.setAttribute("id", 'running');
    running.setAttribute("alt", 'running stickman');
    var button = document.createTextNode('Check Answer');
    document.getElementById("main-container").appendChild(running);

    var header = document.createElement("h3");
    var headText = document.createTextNode("Congratulations!!");
    header.appendChild(headText);
    document.getElementById("main-container").appendChild(header);

    var newPara2 = document.createElement("p");
    var text = document.createTextNode("You've completed all levels. Play again!");
    newPara2.appendChild(text);
    document.getElementById("main-container").appendChild(newPara2);

    var startOver = document.createElement("a");
    startOver.setAttribute("href", "https://bichsel-rachel.github.io/classes/cit261/final/index.html");
    startOver.setAttribute("id", "play-again");
    var linkText = document.createTextNode('Play Again');
    startOver.appendChild(linkText);
    document.getElementById("main-container").appendChild(startOver);

}

function hintOne() {
    var newPara2 = document.createElement("p");
    var text = document.createTextNode("You put it on a envelope.");
    newPara2.appendChild(text);
    document.getElementById("main-container").appendChild(newPara2);
}

function hintTwo() {
    var newPara2 = document.createElement("p");
    var text = document.createTextNode("Every parent wishes for this while a child throws a tantrum.");
    newPara2.appendChild(text);
    document.getElementById("main-container").appendChild(newPara2);
}

function hintThree() {
    var newPara2 = document.createElement("p");
    var text = document.createTextNode("You put it into the ground.");
    newPara2.appendChild(text);
    document.getElementById("main-container").appendChild(newPara2);
}

function bloody() {
    document.getElementById("blood").style.background = "red";
    document.getElementById("blood").style.transform = "scale(1.1)";
    document.getElementById("blood").style.transition = "all 2s";
}
