var a = prompt("Enter value of a","");
var b = prompt("Enter value of b","");
var c = prompt("Enter value of c","");
 
var abc =(b * b - 4 * a * c);
var abc = -(abc);
var	root_part = Math.sqrt(abc);
var denom = 2 * a;
var root1 = ( -b + root_part ) / denom;
var root2 = ( -b - root_part ) / denom;

document.write("1st root: "+root1+"<br />");
document.write("2nd root: "+root2+"<br />");
