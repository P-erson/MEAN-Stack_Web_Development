function submit(){
    var name = prompt("What is your name");

    var age = new Date().getFullYear() - document.getElementById('birthYear').value;
    var ageCategory;
    if (age < 13)
        ageCategory = 'Kid';
    else if (age < 17)
        ageCategory = 'Teen';
    else if (age < 59)
        ageCategory = 'Adult';
    else 
        ageCategory = 'Senior';

    var studentMessage = (document.getElementById('isStudent').checked) ? "Don't forget to study hard!" : "";

    //Alert
    window.alert(`Hello ${name}, you are ${age} years old.\nCategory: ${ageCategory}.\n${studentMessage}`);
    //Log
    console.log(`Hello ${name}, you are ${age} years old.\nCategory: ${ageCategory}.\n${studentMessage}`);   
    //DOM
    document.getElementById('message').innerText = `Hello ${name}, you are ${age} years old.\nCategory: ${ageCategory}.\n${studentMessage}`;
}