//Example 1 code
function force() {
    document.getElementById("force").style.color = "red";
    document.getElementById("force").style.fontWeight = "bold";
    document.getElementById("force").style.fontSize = "2em";
}

//Example 2 code
function toParallel() {
    document.getElementById("square").style.transform = "skew(20deg)";
    document.getElementById("square").style.transition = "all 2s";
}

function toSquare() {
    document.getElementById("square").style.transform = "none";
}


//Example 3 code
function elephant() {
    var size = document.getElementById("size").value;
     document.getElementById("change").style.fontSize = size;
}
 

   