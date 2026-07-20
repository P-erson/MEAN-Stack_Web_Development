var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var age = document.getElementById('age')
var isGraduated = document.getElementById('isGraduated')


function submit(){
    event.preventDefault();
    const data = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        age: Number(age.value),
        isGraduated: isGraduated.checked
    };

    firstName.value = '';
    lastName.value = '';
    age.value ='';
    isGraduated.checked = false;

}
