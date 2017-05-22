
function myFunction(){
    var text = document.getElementById('space').innerHTML;
    var nbsp = text.replace(/&/g, "&amp;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;")  
  document.getElementById("space").innerHTML = nbsp;
  console.log(nbsp);
  }