var numbers = ["Pesho",5,"Pesho","Pesho","Pesho","Pesho","Pesho","Pesho","Pesho","Pesho","Pesho","Pesho","Pesho",2,3,3,2,1,1,3,3,3,2,2,3]; 
var sortedNumber = numbers.sort();
var currentSequence = 1,
    longestSequence = 1,
    mostFrequentNum = sortedNumber[0];
 for (var i = 0; i < sortedNumber.length - 1; i++) {
        if (sortedNumber[i] === sortedNumber[i + 1]) {
            currentSequence++;
            if (longestSequence <= currentSequence) {
                longestSequence = currentSequence;
                mostFrequentNum = sortedNumber[i];
            }
        }
        else {
            currentSequence = 1;
        }
    }

    document.write("the most common string in the array is '" + mostFrequentNum +"' and has been repeated " + longestSequence + " times in a row");