//create Element example
function createElement() {
 var para = document.createElement("p");
  var text = document.createTextNode("This is the time to test.");
  para.appendChild(text);
  document.getElementById("insertPar").appendChild(para);
}

function addName(){
    var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("partyList").appendChild(node);
}
