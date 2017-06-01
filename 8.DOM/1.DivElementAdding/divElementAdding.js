////Adding Div element, append P element in it and then insert the Div element just before an element in the Body tag

document.getElementById("myBtn").addEventListener("click", addingDiv); 
function addingDiv () {
    "use strict";
    var x = document.createElement("div");
    x.style.border = "2px solid green";
    x.style.margin ="10px";
    x.style.backgroundColor ="#4ef442";
    var y = document.createElement("p");
    x.appendChild(y);
    var t = document.createTextNode(Date());
    y.appendChild(t);
    document.body.insertBefore(x,ulList);

};