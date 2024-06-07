function colors(){
    var red = document.getElementById("RED").value;
    var green = document.getElementById("GREEN").value;
    var blue = document.getElementById("BLUE").value;

    document.querySelector(".resultbox").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("output").innerHTML = 'rgb(' + red + ',' + green + ',' + blue + ')';
}