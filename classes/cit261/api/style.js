function bob() {
    var input = document.getElementById('firstName').value;
    sessionStorage.setItem('firstName', input); document.getElementById('bobResult').innerHTML = sessionStorage.getItem('firstName');
}

function hogwarts(){
var houses = ['Gryffindor','Slytherin','Ravenclaw', 'Hufflepuff'];
localStorage.setItem("houses", JSON.stringify(houses));
var retrievedData = localStorage.getItem("houses");
var house = JSON.parse(retrievedData);
document.getElementById('hogResults').innerHTML = house;
}


function del() {
localStorage.clear();
}

function colors(){
var colors = ['red','orange','yellow','green','blue','purple'];
sessionStorage.setItem("colors", JSON.stringify(colors));
document.getElementById('colorsResults').innerHTML = sessionStorage.getItem('colors');
}

function user() {
    var user = {'firstName':'Bob', 'lastName': 'Smith', 'age':'45'};
    sessionStorage.setItem('user', JSON.stringify(user));
    var retrievedData = sessionStorage.getItem('user');
    var userInfo = JSON.parse(retrievedData)
    document.getElementById('test').innerHTML = "<strong>First Name: </strong>" + userInfo.firstName + "<br /><strong>Last Name: </strong>" + userInfo.lastName + "<br /><strong>Age: </strong>" + userInfo.age;
}
//window.onload = colors;

