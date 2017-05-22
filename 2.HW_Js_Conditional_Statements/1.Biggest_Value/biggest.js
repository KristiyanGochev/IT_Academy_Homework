function submit(){
var a = document.getElementById("first").value,
    b = document.getElementById("second").value,
    c = document.getElementById("third").value,
    biggest;

if(a > b){
    if(a > c){
    biggest = a;
    }
        else{
            bigget = c;
        }
    }
    else if (b > c){
    biggest = b;
    }
        else{
        biggest = c;
        }
console.log("The biggest number is " + biggest);
document.getElementById('space').innerHTML ="The biggest number is " + biggest;
}

    



