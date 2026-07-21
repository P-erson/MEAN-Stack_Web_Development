var database = [
    {
        'firstName': 'Mahmoud',
        'lastName': 'Fayed',
        'age': 19,
        'isGraduated': false
    }
]

var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var age = document.getElementById('age')
var isGraduated = document.getElementById('isGraduated')

var dataTable = document.getElementById('dataTable');

console.log(database);

function submit(){
    event.preventDefault();
    const data = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        age: Number(age.value),
        isGraduated: isGraduated.checked
    };
    database[database.length] = data;
    console.log(database);
    
    // console.log(database.length);
    dataTable.innerHTML += `<tr id="user${database.length - 1}"> <td class="tableCol">${data.firstName}</td> <td class="tableCol">${data.lastName}</td> <td class="tableCol">${data.age}</td> <td class="tableCol">${data.isGraduated}</td> <td><button onclick="retrieveData(${database.length - 1})">Update</button><button onclick="deleteUser(${database.length - 1})">Delete</button></td> </tr>`
    

    firstName.value = '';
    lastName.value = '';
    age.value ='';
    isGraduated.checked = false;
}

function deleteUser(index) {
    delete database[index];
    console.log(database);
    
    document.getElementById(`user${index}`).innerHTML = null;
}

function retrieveData(index) {
    firstName.value = database[index].firstName;
    lastName.value = database[index].lastName;
    age.value = database[index].age;
    isGraduated.checked = database[index].isGraduated;

    document.getElementById('updateBtn').outerHTML = `<button id="updateBtn" onclick="updateUser(${index})">Update</button>`
}

function updateUser(index){   
    database[index].firstName = firstName.value;
    database[index].lastName = lastName.value;
    database[index].age = age.value;
    database[index].isGraduated = isGraduated.checked;
    

    document.getElementById(`user${index}`).innerHTML = `<td class="tableCol">${firstName.value}</td> <td class="tableCol">${lastName.value}</td> <td class="tableCol">${age.value}</td> <td class="tableCol">${isGraduated.checked}</td> <td><button onclick="retrieveData(${database.length - 1})">Update</button><button onclick="deleteUser(${database.length - 1})">Delete</button></td>`

    firstName.value = '';
    lastName.value = '';
    age.value ='';
    isGraduated.checked = false;
}