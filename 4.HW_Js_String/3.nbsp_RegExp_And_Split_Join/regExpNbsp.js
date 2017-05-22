//RegExp Method

function myFunction(){
  var str = document.getElementById('space').innerHTML;
var re = RegExp(" ", 'g');
    var result = str.replace(re, "");
  
  document.getElementById('space').innerHTML = result;
  document.getElementById("below").innerHTML = "You used RegExp method to accomplish this result" 
}

//Split Join Methods

function regExp(){
    var text = document.getElementById('space').innerHTML;
    var nbsp = text.split(" ").join("");
    document.getElementById("space").innerHTML = nbsp;
     document.getElementById("below").innerHTML = "You used the Split and Join methods to accomplish this result";
}
