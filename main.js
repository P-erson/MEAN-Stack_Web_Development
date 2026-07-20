var firstName = document.getElementById('firstName'), lastName = document.getElementById('lastName'), age = document.getElementById('age'), isGraduated = document.getElementById('isGraduated').checked, form = document.getElementById('form');

form.addEventListener('submit', function (){
    event.preventDefault();
    console.log(firstName, lastName, age, isGraduated);
    
})