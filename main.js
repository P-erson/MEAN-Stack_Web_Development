var n1 = prompt("Enter a number (Number 1): ");
document.getElementById('num1').innerText = "Number 1 = " + n1;
var n2 = prompt("Enter a number (Number 2): ");
document.getElementById('num2').innerText = "Number 2 = " + n2;

document.getElementById('sum').innerHTML = "Sum = " + (+n1 + +n2);
document.getElementById('difference').innerHTML = "Difference = " + (+n1 - +n2);
document.getElementById('product').innerHTML = "Product = " + (+n1 * +n2);
document.getElementById('quotient').innerHTML = "Quotient = " + (+n1 / +n2);



var firstName = prompt("Enter your first name: ");
document.getElementById('fName').innerText = "First Name: " + firstName;
var lastName = prompt("Enter your last name: ");
document.getElementById('lName').innerText = "Last Name: " + lastName
var age = prompt("Enter your age: ");
document.getElementById('age').innerText = "Age: " + age

document.getElementById('sentence').innerText = "Good Afternoon " + firstName + " " + lastName + ".\n You are " + age + " years old.";