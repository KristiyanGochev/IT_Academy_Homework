
function myFunction(){
  var a = document.getElementById('one').value,
      b = document.getElementById('two').value,
      c = document.getElementById('three').value,
      d = document.getElementById('four').value,
      q = a.toString(),
      g = b.toString(),
      f = c.toString(),
      r = d.toString(),
    text = document.getElementById('space').innerHTML;
if( a*1 + b*1 == c*1 + d*1){
  text = q + g + f + r + " is a HAPPY number";
}else{
  text = "The number is NOT happy";
}
  document.getElementById('space').innerHTML = text;
};