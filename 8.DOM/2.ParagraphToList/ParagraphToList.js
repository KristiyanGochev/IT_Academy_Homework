(function(){
    document.getElementById("myBtn").addEventListener("click", test); 
function test(){
    var str = document.getElementById('text').textContent;
    var arr = str.split(" ");
    var newUl = document.createElement("ul");
   
    for(i=0 ;i < arr.length; i++){
      var newLi = document.createElement('li');
      newLi.textContent = arr[i];
      newUl.appendChild(newLi);
      newLi = document.createElement('li');
  }
   document.body.insertBefore(newUl,ulList);
}

}());


