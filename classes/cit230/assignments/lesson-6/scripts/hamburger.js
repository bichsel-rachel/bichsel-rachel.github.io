
function toggleHam() {

    console.log("Test");

    if (document.getElementById("navigation").style.display == "inherit")

    {
        console.log("Test2");
        document.getElementById("navigation").style.display = "none";
    }
    
    else 
      document.getElementById("navigation").style.display = "inherit";  

}
