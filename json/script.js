//Parse Example

function hogwarts(){
var houses = ['Gryffindor','Slytherin','Ravenclaw', 'Hufflepuff'];
localStorage.setItem("houses", JSON.stringify(houses));
var retrievedData = localStorage.getItem("houses");
var house = JSON.parse(retrievedData);
document.getElementById('hogResults').innerHTML = house;
}


function retrieveData() {

    var request = new XMLHttpRequest();

    request.open('GET', 'https://bichsel-rachel.github.io/classes/cit261/ajax/lor.json', true);
    //send request to server
    
    request.onload = function() {
    //console.log(ourRequest.responseText);
    //JSON parse converts text into JSON string
    var characters = JSON.parse(request.responseText);
    console.log(characters);
    displayData(characters);
    //console.log(ourData[0]);
};
    
    request.send();
    
    displayData(request);
    
}

function displayData(characters){
    
     var htmlString = "";
    
    for (i = 0; i < characters.length; i++){
        htmlString += "<p>" + characters[i].name + " is a " + characters[i].race + ". He likes " + characters[i].facts.likes + ". He dislikes " + characters[i].facts.dislikes + ".</p>";
    }
    
    document.getElementById("display").innerHTML = htmlString;
    
}

//Stringify example

function favoriteThings() {
    var fav = {color: "purple", food: "shrimp", holidy: "Halloween", book: "Misborn"};
    var intoJSON = JSON.stringify(fav);
    document.getElementById("favorite").innerHTML = intoJSON;
}

