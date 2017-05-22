var numbers = [72,623,533,1,2,98];

function bubbleSort() {
numbers.sort(function(a, b){return a-b});
console.log(numbers);
}
bubbleSort();
document.write(numbers);