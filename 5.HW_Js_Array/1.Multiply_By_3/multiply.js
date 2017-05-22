var fruits, text, fLen, i;

numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
nLen = numbers.length;
text = " ";
    for (i =0; i < nLen; i++) {
    text += "<li>" + umbers[i]*3 + "</li>";
    }

document.getElementById("space").innerHTML = text ;
