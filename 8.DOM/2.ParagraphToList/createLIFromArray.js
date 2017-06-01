function myFunction() {
var str = document.getElementById('text');
var arr = str.split(" ");
var ul = document.createElement("ul");
var li = document.createElement('li');
ul.appendChild(li);
document.body.insertBefore(ul,ulList);
};