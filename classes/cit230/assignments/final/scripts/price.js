var section = document.getElementById("price1");
var section2 = document.getElementById("price2");
var section3 = document.getElementById("price3");
var section4 = document.getElementById("price4");



var requestURL = 'https://rbichsel.github.io/assignments/final/data/services.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var townInfo = request.response;
    showInfo(townInfo);
}


function showInfo(jsonObj) {
    var mnTowns = jsonObj['services'];
 
        var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
     var myPara3 = document.createElement('p');
     var myPara4 = document.createElement('p');
        

    myPara1.textContent = mnTowns[0].price;
    myPara2.textContent = mnTowns[1].price;
    myPara3.textContent = mnTowns[2].price;
    myPara4.textContent = mnTowns[3].price;
        

        section.appendChild(myPara1);
    section2.appendChild(myPara2);
    section3.appendChild(myPara3);
    section4.appendChild(myPara4);


    
}
