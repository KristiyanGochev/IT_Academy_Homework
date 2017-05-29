class Worker {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;

    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 2) {
            throw new Error(`Person name is too short: ${value.length}`);
        }
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (typeof (value) != 'number') {
            throw new Error(`${value} is not a number`);
        }
        this._age = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;

    }
    sayHello() {
        return `Hello! My name is ${this.name},I'am ${this.age} years old.`;
    }
}

class Hired extends Worker {
    constructor(name, age, position, salary, contract) {
        super(name, age, position);
        this.salary = salary;
        this.contract = contract;
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        this._salary = value;
    }
    get contract() {
        return this._contract
    }
    set contract(value) {
        this._contract = value;
    }

    toString() {
        return `${this.name} | ${this.age} years old | ${this.position} | My salary is ${this.salary} |My Contract is ${this.contract} `;
    }

    beingHired() {
        return super.sayHello() + `I just have been hired as ${this.position} .My contract will be ${this.contract} and the salary: ${this.salary} per week`;
    }

}
class Sacked extends Worker {
    constructor(name, age, position, salary, contract) {
        super(name, age, position);
        this.salary = salary;
        this.contract = contract;
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        this._salary = value;
    }
    get contract() {
        return this._contract
    }
    set contract(value) {
        this._contract = value;
    }

    toString() {
        return `${this.name} | ${this.age} years old | ${this.position} | My salary is ${this.salary} |My Contract is ${this.contract} `;
    }

    beingSacked() {
        return super.sayHello() + `I used to work like ${this.position}.My salary was ${this.salary} salery per week, but my contract has ${this.contract} and i have been Sacked!`;
    }

}

var ivan = new Sacked('Ivan', 23, 'dishwasher', 1300, 'expired');
var joro = new Sacked('Joro', 45, 'accountant', 1500, 'expired');
var pesho = new Hired('Pesho', 23, 'entrepreneur', 1500, 'Permanent');
console.log(ivan.sayHello());
console.log(ivan.beingSacked());

console.log(joro.sayHello());
console.log(joro.beingSacked());

console.log(pesho.sayHello());
console.log(pesho.beingHired());

