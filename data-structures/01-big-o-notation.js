// Sample 1
const checkForTimeComplexity = function (n) {
  console.log((n * (n + 1)) / 2);
  return (n * (n + 1)) / 2;

  // 1 + 1 + 1 + 1 = 4
  // O(4) === O(1)
};
checkForTimeComplexity(5);

// Sample 2
let a = 0,
  b = 0;
// 1 + 1 = 2

for (i = 0; i <= n; i++) {
  // 1 + (1 + 1)n = 2n + 1
  a = a + 5;
  // (1 + 1)n = 2n
}
for (j = 0; j <= m; j++) {
  // 1 + (1 + 1)m = 2m + 1
  b = b + 6;
  // (1 + 1)m = 2m
}

// TC = 4n + 4m + 4 === O(n + m)
// SC = O(1)

// Sample 3
let c = 0,
  d = 0;
// 1 + 1 = 2

for (l = 0; l <= p; l++) {
  // 1 + (1 + 1)p = 1 + 2p
  for (m = 0; m <= p; m++) {
    //( 1 + (1 + 1)p)p = p + 2p^2
    c = c + m;
    // (1 + 1)p^2 = 2p^2
  }
}
for (n = 0; n <= p; n++) {
  // 1 + (1 + 1)p = 1 + 2p
  d = d + n;
  // (1 + 1)p = 2p
}
// TC = 4p^2 + 7p + 4 === 0(n^2 + n) ≈ O(n^2)
// SC = 0(1)

// Sample of O(logN)
function doubleLoop(N) {
  let a = 0;
  // 1
  for (i = 0; i < N; i++) {
    // 1 + (1 + 1)N = 2N + 1
    for (j = N; j > i; j--) {
      // (1 + (1 + 1)N/2)N = N^2 + N
      a = a + i + j;
      //( 1 + 1 + 1)N/2*N = 3N^2/2
      console.log(a);
    }
  }
}
// TC = 5N^2/2 + 3N + 2 === O(N^2)
// SC = O(1)

// General formular: N + (N - 1) + (N - 2) + (N - 3) + ... + 1 = N(N + 1)/2 === O(N^2)
doubleLoop(2);
// PS: Take a peek at screenshots just in case


// JS RECAP
const doMaths = function mathLib(a, b) {
  console.log(Math.abs(a / b).toFixed(2));
};
doMaths(1.1, 3);

var monthNum;
var monthName;
switch (monthNum) {
  case '1':
    monthName = 'January';
    console.log(monthName);
    break;

  case '2':
    monthName = 'February';
    console.log(monthName);
    break;

  case '3':
    monthName = 'March';
    console.log(monthName);
    break;

  case '4':
    monthName = 'April';
    console.log(monthName);
    break;

  case '5':
    monthName = 'May';
    console.log(monthName);
    break;

  case '6':
    monthName = 'June';
    console.log(monthName);
    break;

  case '7':
    monthName = 'July';
    console.log(monthName);
    break;

  case '8':
    monthName = 'August';
    console.log(monthName);
    break;

  case '9':
    monthName = 'September';
    console.log(monthName);
    break;

  case '10':
    monthName = 'October';
    console.log(monthName);
    break;

  case '11':
    monthName = 'November';
    console.log(monthName);
    break;

  case '12':
    monthName = 'December';
    console.log(monthName);
    break;

  default:
    monthName = 'Doesnt exist due to Bad Input';
    console.log(monthName);
}

// while loop
var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  number++;
}
console.log(sum);

// for loop
var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
  sum += number;
}
console.log(sum);

// value-returning function
function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; i--) {
    product *= i;
  }
  console.log(product);
  return product;
}
factorial(5);

function incrementIndex(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += number;
  }
}
var marks = [15, 20, 25, 30, 35, 40];
incrementIndex(marks, 10);
const usefulMarks = marks;
console.log('usefulMarks: ', usefulMarks);

// Check for value or reference parameter
// Some variables reference an in-memory address <>  | so if the variable is assigned to a new variable, they use the same in-memory address

const first = 123;
const second = 123;

const firstObj = [1, 2, 3];
const secondObj = [1, 2, 3];

let thirdObj = firstObj;
thirdObj.push(4, 5, 6);

console.log(first === second);
console.log(firstObj === secondObj);
console.log(typeof firstObj === typeof secondObj);
console.log(firstObj);

// Variable Scope
// Case I: Variable is declared & defined outside a function | Global Scope
var scope = 'global';
function showScope() {
  return scope;
}
console.log(scope);
console.log(showScope());

// Case II: Variable is declared & defined inside a function | Local Scope
function checkScope() {
  scope = 'local';
  return scope;
}
console.log(scope);
console.log(checkScope());
console.log(scope);

// Recursion | any function that uses recursion can be re-written in an 'Iterative manner'
function factorials(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorials(5));

// Object Oriented Programming (OOP)

// default binding | returns global object
function warn() {
  console.log(`${this.name} warned rajesh yesterday`);
}
const name = 'dev_willyy';
warn();

// explicit or hard binding | forces a function to use a particulatr object as its context
function warning() {
  console.log(`${this.name} warned rajesh yesterday`);
}
const personName = {
  name: 'dev_willyy',
};
warning.call(personName);

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
const nameObj = new Person('Allison', 'Hyacintho');
const shoeObj = new Person('Nike', 'Dolce & Gabana');
// console.log(nameObj.name, nameObj.surname);
// console.log(shoeObj.name, shoeObj.surname);

function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

// the 'this' keyword is used to 'bind' each function & property to an object 'instance'
function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log('Insufficient funds');
  }
}

function toString() {
  return `Balance: $${this.balance}`;
}

const dev_willyy_acc = new Checking(500);

dev_willyy_acc.deposit(30000);
dev_willyy_acc.withdraw(12000);
console.log(dev_willyy_acc.toString());
