//////  PART A
// 1
var name = 'Mahmoud Fayed';
console.log(name.length);

// 2
var sentence = 'I am learning JavaScript';
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

//3
var email = 'student@nti.com', hasAt = false;
for (var char of email) //Since a String is an array
    if (char == '@')
        hasAt = true;
console.log(`hasAt = ${hasAt}`);

// 4
var string = 'JavaScript';
console.log(string[0]);
console.log(string[string.length - 1]);

// 5
var initialString = 'This is a bad day';
console.log(initialString.replace('bad', 'good'));

// 6
var initialString = 'I love coding';
var updatedString = initialString.split(' ');
console.log(updatedString.join('-'));

// 7
var string = ' nti egypt training ';
string = string.trim();
string = string.toUpperCase();
console.log(string.replace('EGYPT', 'CAIRO'));


////// PART B
// 8
var string = '45.8';
console.log(Number(string));

// 9
var number = 7.6;
console.log(`Rounded = ${Math.round(number)}\nFloored = ${Math.floor(number)}\nCeiled = ${Math.ceil(number)}`);

// 10
console.log(`Max = ${Math.max(12, 5, 28, 9)}\nMin = ${Math.min(12, 5, 28, 9)}`);

// 11
console.log(Math.round(Math.random()*20));

// 12
console.log(+(19.4567).toFixed(2));

// 13
var number, numbers = [], sum = 0;
for (var i = 0; i < 5; i++){
    number = (Math.random()*49) + 1;
    numbers[i] = number;
    sum += number;
}
console.log(
    `Max = ${Math.max(...numbers)}\nMin = ${Math.min(...numbers)}\nAverage = ${(sum/5).toFixed(2)}`
)


////// PART C
// 14
for (var i = 1; i <= 20; i++)
    console.log(i);

// 15
for (var i = 1; i <= 15; i+=2)
    console.log(i);

// 16
var number = 10;
while (number >= 1){
    console.log(number);
    number--;
}

// 17
var array = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of array)
    console.log(name);

// 18
for (var i = 1; i <= 10; i++){
    if (i == 7)
        break;
    console.log(i);
}  

// 19
for (var i = 1; i <= 3; i++)
    for (var j = 1; j <= 3; j++)
        console.log(`${i} * ${j} = ${j*i}`);

// 20
for (var i = 1; i <= 30; i++){
    if (i == 25)
        break;
    if (i % 3 == 0)
        continue;
    console.log(i);
}


////// PART D
// 21
var sentence = 'HELLO';
for (var i = 0; i < sentence.length; i++)
    console.log(sentence[i]);
    
// 22
var array = [10, 20, 30, 40], sum = 0;
for (var number of array)
    sum += number
console.log(sum);

// 23
var sentence = 'JavaScript is amazing and awesome', count = 0;
for (var letter of sentence)
    if (letter == 'a' || letter == 'A')
        count++;
console.log(count);

// 24
var array = [70, 85, 92, 60, 77, 88];
for (var number of array)
    if (number % 2 == 0)
        console.log(number);
    
// 25
var string;
for (var i = 1; i <= 4; i++){
    string = '';
    for (var j = 1; j <= i; j++){
        string += '*';
    }
    console.log(string);
}

// 26
var array =  ["ahmed", "sara", "omar", "laila", "hassan"], namesMatched = 0;
for (var i = 0; i < array.length; i++){
    array[i] = array[i].toUpperCase();
    if (array[i][0] == 'A' || array[i][0] == 'S'){
        console.log(array[i]);
        namesMatched++;
    }     
}
console.log(namesMatched);
// console.log(array);
