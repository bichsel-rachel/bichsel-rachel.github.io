function force() {
    document.getElementById("force").style.color = "red";
    document.getElementById("force").style.fontWeight = "bold";
    document.getElementById("force").style.fontSize = "2em";
}

function toParallel() {
    document.getElementById("square").style.transform = "skew(20deg)";
    document.getElementById("square").style.transition = "all 2s";
}

function toSquare() {
    document.getElementById("square").style.transform = "none";
}

function elephant() {
    var size = document.getElementById("size").value;
     document.getElementById("change").style.fontSize = size;
}
 

   