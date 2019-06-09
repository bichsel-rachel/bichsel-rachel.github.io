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
    
    
    document.getElementById("display").innerHTML = characters[0].name;
    
}

    
//    var htmlString = "";
//    
//    for (i = 0; i < character.length; i++){
//        htmlString += "<p>" + character[i].name + " is a " + character[i].race + ". He likes " + character[i].facts.likes + ". He dislikes " + character[i].facts.dislikes + ".</p>";
//        document.getElementById("display").innerHTML;
//    }

function renderHTML(data) {
    var htmlString = "";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].race + ". He likes " + data[i].facts.likes + ". He dislikes " + data[i].facts.dislikes + ".</p>";
    }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);  
}