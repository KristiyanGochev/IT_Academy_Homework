var x = document.querySelectorAll('.main-div')
debugger;

  for (i = 0; i < x.length; i++) {
        if(i%2){
          var op = document.createElement("div");
          var newP = document.createElement("p");
          var y = document.createTextNode(Date());
          
          newP.appendChild(y);
          op.appendChild(newP);
           
          x[i].appendChild(op);
        }
        else{};
    }
