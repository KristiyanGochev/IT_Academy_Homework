num = 100;
text = "";
for(var i = 0; i <= num; i++)
    if(i % 3 == 0){
    text += i + "<br>";
    document.getElementById("space").innerHTML = text;
    console.log(i);}

    else{
    console.log("----")
    document.getElementById("space").innerHTML = text + "END";
    };
