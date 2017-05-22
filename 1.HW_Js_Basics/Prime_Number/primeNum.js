function myNumber() {
  
    var x = document.getElementById("numb").value;
    var text;  
      if(!x){
      text = "Invalid input";
    }
    else
      if(isPrime(x))
       {
         text = x + " is prime number";
       }
  else
    {
      text = x + " is NOT a prime number";
    }
     
    document.getElementById("space").innerHTML = text;
  
  return false;
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}