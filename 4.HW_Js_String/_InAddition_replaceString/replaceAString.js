function myFunction() {
  var b = document.getElementById("second").value;
  var a = document.getElementById("first").value;
    var str = document.getElementById("space").innerHTML; 
    var txt = str.split(b).join(a);
    document.getElementById("space").innerHTML = txt;
}
