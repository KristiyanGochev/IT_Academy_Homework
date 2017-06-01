var x = document.querySelectorAll('.main-div')
debugger;

  for (i = 0; i < x.length; i++) {
        if(i%2){
          var newP = document.createElement("p");
          var y = document.createTextNode(Date());
          
          newP.appendChild(y);
           
          x[i].appendChild(newP);
        }
        else{};
    }
