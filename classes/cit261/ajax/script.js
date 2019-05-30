var animalContainer = document.getElementById("crap");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
//XMLHttpRequest is a built in browser tool. Establish connection with URL and lets send and store data.
var ourRequest = new XMLHttpRequest();
//tell browser to go to URL and get JSON data. Use GET to get data. second parameter is URL you want to get.
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//
ourRequest.onload = function() {
    //console.log(ourRequest.responseText);
    //JSON parse converts text into JSON string
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    //console.log(ourData[0]);
};
ourRequest.send();   
});

function renderHTML(data) {
    var htmlString = "";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].race + ".</p>";
    }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);  
}


//var thePets = [
//    {
//        "name": "Meowsalot",
//        "species": "cat",
//        "favFood": "tuna"
//    },
//    {
//        "name": "Barky",
//        "species": "dog",
//        "favFood": "carrots"
//    },
//]

//access code
//thePets[1].favFood
//returns "carrots"