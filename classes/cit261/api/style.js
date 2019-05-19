function hogwarts(){

localStorage.setItem("house", "Gryffindor");
document.getElementById("result").innerHTML = localStorage.getItem("house");

    

}

window.onload = hogwarts;
var houses = ['Gryffindor','Slytherin','Ravenclaw', 'Hufflepuff'];