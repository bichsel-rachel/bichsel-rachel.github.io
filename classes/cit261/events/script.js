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

//function animation() {
//var elem = document.getElementById("animate"); 
//  var pos = 0;
//  var id = setInterval(frame, 5);
//  function frame() {
//    if (pos == 350) {
//      clearInterval(id);
//    } else {
//      pos++; 
//      elem.style.top = pos + 'px'; 
//      elem.style.left = pos + 'px'; 
//    }
//  }
//}
function animation() {
    var heart = document.getElementById("animate");
heart.animate(
[
    {transform: 'scale(1)', offset: 0},
    {transform: 'scale(2)',  offset: .5},
    {transform: 'scale(1)',  offset: 1},
], {
    duration: 2000,
    easing: 'ease-in-out',
    delay: 10,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'forwards'
}
);
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