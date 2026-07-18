var form = document.getElementById('form');
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');

form.addEventListener('submit', function () {
    event.preventDefault();
    console.log(`First Name: ${fName.value}\nLast Name: ${lName.value}`);
    
})