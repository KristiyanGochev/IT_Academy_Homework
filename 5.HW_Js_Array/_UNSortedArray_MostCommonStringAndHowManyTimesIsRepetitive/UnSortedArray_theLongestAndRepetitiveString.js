var numbers = [2,2,3,3,3,3,3,3,3,3,1,1,1,1,1,1]; 
var currentSequence = 1,
    longestSequence = 1,
    mostFrequentNum = numbers[0];
 for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            currentSequence++;
            if (longestSequence <= currentSequence) {
                longestSequence = currentSequence;
                mostFrequentNum = numbers[i];
            }
        }
        else {
            currentSequence = 1;
        }
    }

    document.write("the most common string in the array is '" + mostFrequentNum +"' and has been repeated " + longestSequence + " times in a row");