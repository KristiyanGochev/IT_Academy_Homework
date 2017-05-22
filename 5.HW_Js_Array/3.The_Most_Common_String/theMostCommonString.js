var number = [1,1,2,2,3,3,4,4,4,4,5]
var sortedNumber = number.sort();
var start = number[0], item;

    for(var i = 0 ;  i < sortedNumber.length; i++){
    if(start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i+1]){
        item = sortedNumber[i]
    }
    }
document.write(item);
