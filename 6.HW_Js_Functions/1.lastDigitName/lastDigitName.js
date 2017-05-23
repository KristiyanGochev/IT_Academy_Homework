function lastDigit() {
  var number = document.getElementById('number').value;
    var numberToString = number.toString();
    var numberToString = numberToString.charAt(numberToString.length-1);
    var lastDigit = numberToString
    return lastDigit;
};


function sbn(){
   var text;
   switch (lastDigit()) {
    
    case "0":
      text ="Zero";
      break;
    case "1":
    text = "One";
        break;
    case "2":
    text = "Two";
        break;
    case "3":
        text = "Three";
        break;
    case "4":
        text = "Four";
        break;
    case "5":
        text = "Five";
        break;
    case "6":
        text = "Six";
        break;
    case "7":
        text = "Seven";
        break;
    case "8":
        text = "Eight";
        break;
    case "9":
        text = "Nine";
        break;
}
 document.getElementById('space').innerHTML = text;
};