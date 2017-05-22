//Split Join Method

function submit(){
    var text = document.getElementById('space').innerHTML;
    var nbsp = text.split(" ").join("");
    document.getElementById("space").innerHTML = nbsp;
    document.getElementById("below").innerHTML = "You used the Split and Join methods to accomplish this result";
}
