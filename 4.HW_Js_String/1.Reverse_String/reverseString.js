
function submit(){
  var original = document.getElementById('myinput').value;
  var reversed = original.split('').reverse().join('');
  document.getElementById('space').innerHTML = reversed;
}
