//create Element example
function createPara() {
 var newPara = document.createElement("p");
  var text = document.createTextNode("This is a new paragraph element that was not previously here.");
  newPara.appendChild(text);
  document.getElementById("insertPar").appendChild(newPara);
}

function addName() {
var node = document.createElement("LI");
  var textnode = document.createTextNode("Sarah");
  node.appendChild(textnode);
  document.getElementById("partyList").appendChild(node);
}

function beforeName() {
    var newName = document.createElement("li");
    
    var textnode = document.createTextNode("Hilary");
    
    newName.appendChild(textnode);
    
    var list = document.getElementById("partyList");
    list.insertBefore(newName, list.childNodes[0]);
}

function removeName() {
    var list = document.getElementById("partyList");
    list.removeChild(list.childNodes[0]);
}

function removeThirdName() {
    var list = document.getElementById("partyList");
    list.removeChild(list.childNodes[2]);
}

function replacePartyList() {
  var textnode = document.createTextNode("Ricky");
  var item = document.getElementById("partyList").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);
}
