//Onload example
function animation() {
    var heart = document.getElementById("heart");
heart.animate(
[
    {transform: 'scale(1)'},
    {transform: 'scale(2)'},
    {transform: 'scale(1)'},
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

//onclick example
function myMove() {
  var elem = document.getElementById("animate"); 
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px';
    }
  }
}

//Onmouseout Examples
function rotate() {
    document.getElementById("trapezoid").style.transform = "rotate(360deg)"; document.getElementById("trapezoid").style.transition = "all 2s";
}

//Onchange example
function circleSpeed() {
    
    if (document.getElementById("linear").checked){ document.getElementById("circle1").style.transform = "translateX(200px)";
 document.getElementById("circle1").style.transition = "all 2s";
    }
    
    if (document.getElementById('ease').checked){ document.getElementById("circle2").style.transform = "translateX(200px)";
    document.getElementById("circle2").style.transition = "all 2s";
    }
    
     if (document.getElementById('ease-in').checked){ document.getElementById("circle3").style.transform = "translateX(200px)";
 document.getElementById("circle3").style.transition = "all 2s";
    }
    
    if (document.getElementById('ease-out').checked){ document.getElementById("circle4").style.transform = "translateX(200px)";
 document.getElementById("circle4").style.transition = "all 2s";
    }
    
     if (document.getElementById('ease-in-out').checked){ document.getElementById("circle5").style.transform = "translateX(200px)";
 document.getElementById("circle5").style.transition = "all 2s";
    }
    
}