// y is printed, since non-declared variables - with the use of var / let / const - are global
// function x(){
//     y = 'assign'
// }
// x()
// console.log(y);

// function x(){
//     "use strict";
//     try {
//         y = 'assign'
//     }
//     catch (e) {
//         console.log(`Error: ${e}`);
        
//     }
// }
// x()

// (
//     function () {
//         "use strict";
//         var localvar = 'test';
//         try {delete localvar;}
//         catch(e) {console.log(e);}
//     }
// )()


//////PART B
// 4
// undefined, 10
// console.log(x);
// var x = 10;
// console.log(x);

// 5
//Case 1: "Hi"
//Case 2: returns error
// sayHi();
// function sayHi() {
//   console.log("Hi");
// }
// sayBye();
// var sayBye = function () {
//   console.log("Bye");
// };

// 6
// error, since let defines and executes at the same time
// console.log(a);
// let a = 5;

// 7
// undefined, 2, 1
// var n = 1;
// function demo() {
//   console.log(n);
//   var n = 2;
//   console.log(n);
// }
// demo();
// console.log(n);


//////PART C
// 8
// (
//     function () {
//         for (var i = 0; i < 3; i++){
//             console.log(i);
//         }
//         console.log(`i outside loop = ${i}`);
        
//     }
// )()

// 9
// {
//     let x = 9;
// }
// {
//     const y = 2;
// }
// console.log(x);

// 10
let x = 3;
var y = 7;
// let x = 1;
var y = 9;

// 11
const Student = {
    'name': 'ali',
    'age': 23,
    'city':'Cairo'
}
Student.age = 22;
console.log(Student);
Student['grade'] = 'A-';
console.log(Student);
delete Student['city'];
console.log(Student);

try{Student = {'date': 'sunday'}}
catch (e) {console.log(e);}

// 12
const nums = [1, 2, 3]
nums.push(4);
nums[0] = 0;
try{nums = ['a', 'b', 'c']}
catch (e) {console.log(e);}

// 13
// const must be assigned at declaration
// var a;
// let b;
// const c;

// 14
// `window.g1` returned the value in g1, meanwhile it returned `undefined` for g2 and g3

// 15
const handlers = {};
for (let i = 0; i < 3; i++) {
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}
console.log(handlers.fn0());
console.log(handlers.fn2());
// each time `let i = X` is called, a new i is made, meanwhile with var, the same i is updated


//////PART D
// 16
(name) => `Welcome, ${name}!`;

// 17
(first, last, age) => `${first} ${last} is ${age} years old`;

// 18
(a, b) => a*b;
(a, b) => {
    console.log(`a = ${a}\nb = ${b}\nsum = ${a+b}`);    
}


//////PART E
// 19
const product = {
  title: "Laptop",
  price: 15000,
  inStock: true,
  brand: "Dell"
};
const {title, price, inStock} = product;

console.log(title, price, inStock);

// 20
var arr = ["HTML", "CSS", "JS", "React"]
const [one, two] = arr;
console.log(one, two);

// 21
function greet(name = "Guest", message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greet();
greet('Mahmoud');
greet("Mohamed", "Good Morning")

// 22
function sumAll(...numbers) {
    var sum = 0;
    for (var i of numbers)
        sum += numbers[i]
    return sum
}
console.log(sumAll(3, 1, 5, 6, 7, 8, 3, 1, 1));

// 23
var arr1 = [1,2], arr2 = [3, 4, 5]
var mergedArr = [...arr1, ...arr2];
var arr3 = [10, 20, 30];
var copy = [...arr3, 40];
console.log(`original ${arr3}\ncopy ${copy}`);

// 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const merged = {...user, ...contact}
console.log(merged);
// age 23 stays, since it was last executed age

// 25
// const values = [2, 4, 6, 8];
// function total(...numbers) {
//     var sum = 0;
//     for (var i of numbers)
//         sum += i
//     console.log(sum)
// }
// total(values)


//////PART F
// 26
//"Omar", as both reference the same object

// 27
const original = {
  name: "Mona",
  details: { city: "Cairo" }
};

var copy = {...original};
copy.name = "Hassan"; // only changes in copy
copy.details.city = "Alexandria"; // changed in both due to shallow copy
console.log(original, copy);

// 28
var copy = structuredClone(original);
copy.details.city = "Sahel";
console.log(original, copy);

// 29
var obj = { name: "Ahmed", age: 26, city: "Alex" }
localStorage.setItem('userdata', JSON.stringify(obj));

var data = JSON.parse(localStorage.getItem('userdata'));
console.log(typeof data);
console.log(data);
localStorage.removeItem('userdata')


//////PART G
// 30
const APP_CONFIG = {
    'name': 'app_name',
    'version': '1.23',
    'nested api': {'baseurl': '127.0.0.1', 'timeout': '20s'}
}

APP_CONFIG["nested api"].timeout = '10s';
APP_CONFIG['features'] = ['resposive', 'high avilability'];
try{APP_CONFIG = {'appVersion': '2.07'}}
catch (e) {console.log(e);}

// 31
function createCard(title, price = 0, ...tags) {
    var card = [];
    card.push(title);
    card.push(`${price} EGP`);

    for (var i of tags)
        card.push(i);

    return arr.join(' - ')
}

console.log(createCard('Laptop', 15000, 'mobile', 'light-weight', 'long-lasting battery'));

// 32
const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];
for (var i of students) {
    console.log(`${i.name} scored ${i.grade}`);  
}