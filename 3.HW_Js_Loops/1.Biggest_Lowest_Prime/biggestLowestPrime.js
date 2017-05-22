var  biggest;
var   lowest
      b = prompt("Select interval length: From","");
      a = prompt("Select interval length: To","");
      

for (biggest = a; biggest > 0;biggest--)
      if(biggest%2){break;}
      document.write("The biggest prime number is " + biggest +"<br>");
for (lowest = b; lowest<100;lowest++)
      if(lowest%2){break;}
document.write("The lowest prime number is " +lowest);
