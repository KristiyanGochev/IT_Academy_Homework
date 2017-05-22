function myFunction(){
 var text;
 var number = document.getElementById("number").value;


switch (number) {
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
    case "10":
        text = "Ten";
        break;
    default:
        text = "Your number is not correct, please enter a number from 1 to 10.";
        break;
}
    document.getElementById('space').innerHTML= text;
}