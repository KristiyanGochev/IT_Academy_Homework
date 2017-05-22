function submit(){
  var firstOne = document.getElementById('firstString').value;
  var secondOne = document.getElementById('secondString').value;
  document.getElementById('space').innerHTML = (firstOne.split(secondOne).length-1);
}
