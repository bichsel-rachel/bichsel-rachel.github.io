var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayname = days[d.getDay()];

var date = d.getDate();

var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = mon[d.getMonth()];

var year = d.getFullYear();
console.log(dayname);

final = dayname + ', ' + date + ' ' + month + ' ' + year;

document.getElementById("currentdate").innerHTML = final;
