// ФИРМА 

function Person(name, age, position) {
    this.name = name;
    this.age = age;
	this.position = position;
}

Person.prototype.sayHelloHired = function() {
    debugger;
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old. My possition is ${this.position}`);
}
Person.prototype.sayHelloSacked = function() {
    debugger;
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old. I used to work as ${this.position}, but they sacked me!`);
}
Person.prototype.presentYourselfe = function() {
    debugger;
    console.log(`Hello! I am ${this.name} and I am ${this.age} years old.Have a wonderful day!`);
}
var mimi = new Person('Maria', 18,'Dishwasher');
debugger;
mimi.sayHelloHired();

var joro = new Person('Gosho', 24, 'sales advisor');
debugger;
joro.sayHelloSacked();

var pesho = new Person('Pesho', 45, 'Dishwasher');
pesho.sayHelloSacked();

var ivan = new Person('Ivan Peshev',23,'Cashier');
ivan.sayHelloHired();