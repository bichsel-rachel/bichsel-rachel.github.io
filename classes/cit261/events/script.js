function magicNumber() {
 document.getElementById("magicNumber").innerHTML = "<p>42</p>";
}

function toParallel() {
    document.getElementById("square").style.transform = "skew(20deg)";
    document.getElementById("square").style.transition = "all 2s";
}

function emotion() {
    var showEmotion = document.getElementById("emotion").value;
    
    if (showEmotion == 'happy'){ document.getElementById("color").style.backgroundColor = "yellow";
    }
    if (showEmotion == 'sad'){ document.getElementById("color").style.backgroundColor = "blue";
    }
    if (showEmotion == 'angry'){ document.getElementById("color").style.backgroundColor = "red";
    }
    
}

function animation() {
    document.getElementById("heart").style.transform = "skew(20deg)";
    document.getElementById("heart").style.transition = "all 2s";
}

function chickenRun() {
    document.getElementById("chicken").style.transform = "translateX(200px)";
    
    document.getElementById("chicken").style.transition = "all 2s";
}

function findWally() { document.getElementById("wally").style.display = "inline";
document.getElementById("text").value = "There he is!";
}

function myFunction() {
  alert("You pressed a key inside the input field");
}

function pokeFake() {
document.getElementById("smile").style.display = "none"; 
document.getElementById("frown").style.display = "inline";
}