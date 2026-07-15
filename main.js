////// PART A
// 1
var car = {
    'brand': 'BMW',
    'model': 'E36',
    'year': '1999',
    'color': 'Estoril Blue Metallic'
}
console.log(car);

// 2
console.log(car.brand);
console.log(car['year']);

// 3
car.color = 'black';
car['price'] = 1260000;
console.log(car);

// 4
delete car.year;
console.log(car.year); // `Undefined` as the year is no longer defined

// 5
var person = {
    'student-name': 'Sara'
}
person['age'] = 20;
console.log(person["student-name"]);

// 6
var book = {
    'title': 'The Art of War',
    'author': {
        'first-name': 'Wu',
        'last-name': 'Sun'
    }
}
console.log(book.author['last-name']);

// 7
var person = {
    name: "Ali", age: 25, city: "Cairo"
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty('job'));

// 8
var settings = {
    'theme': 'dark',
    'lang': 'en'
}
Object.freeze(settings);
settings.theme = 'light';
settings['fontSize'] = 16;
console.log(settings); // Changes aren't applied as the object is freezed


////// PART B
// 9
var city = [
    'Cairo',
    'Giza',
    'Alexandria',
    'Mansoura',
    'Port Said'
]
console.log(`Cities: ${city}\nLength${city.length}`);

// 10
console.log(`First: ${city[0]}\nSecond: ${city[1]}\nLast: ${city[city.length - 1]}`);

// 11
city.push('Damietta');
console.log(city);
city.unshift('Siwah');
console.log(city);

// 12
city.pop();
console.log(city);
city.shift();
console.log(city);

// 13
var arr = [
    "HTML", 
    "CSS", 
    "JS", 
    "React"
]
console.log(arr.indexOf('JS'));
console.log(arr.includes('Python'));

// 14
var arr = [
    "pen", 
    "book", 
    "bag"
]
arr.forEach(function (item, index) {
    console.log(`Item: ${item}\tIndex: ${index}`);
})

// 15
var colors = ["red", "green", "blue", "yellow"]
for (var color in colors){
    if (colors[color] == 'blue')
        break;
    console.log(colors[color]);
}

// 16
var letters = ["A", "B", "C"]
letters.push('D');
letters.push('E');
console.log(`Array: ${letters}\nLength: ${letters.length}`);


//////PART C
// 17
var fruits =  ["apple", "banana", "cherry"]
var newArr = fruits.map(function (fruit) {
    return fruit.toUpperCase();
})
console.log(`New: ${newArr}\nOld: ${fruits}`);

// 18
var numbers = [10, 55, 30, 80, 45, 90]
console.log(numbers.filter(function (number) {
    if (number > 50)
        return number;
}));

// 19
var cities = ["Cairo", "Giza", "Alex", "Aswan"]
console.log(cities.find(function (city) {
    if (city[0] == 'A')
        return city;
}));
console.log(cities.findIndex(function (city, index) {
    if (city[0] == 'A')
        return index;
}));

// 20
var letters = ["a", "b", "c", "d", "e"]
console.log(`Original: ${letters}\nNew: ${
    letters.slice(1, 4)
}`);

// 21
var numbers = ["one", "two","three", "four", "five"]
console.log(`Removed: ${numbers.splice(1, 2)}\nFinal Array ${numbers}`);

// 22
var numbers = [40, 100, 1, 5, 25]
console.log(numbers.sort(function (first, second) {
    return first - second;
}));

// 23
var ages = [16, 21, 17, 19]
console.log(ages.some(function (age) {
    return (age >= 18);
}));

// 24
var numbers = [5, 10, 15, 20]
console.log(numbers.reduce(function (acc, number) {
    return acc + number;
}, 0));


////// PART D
// 25
var students = [
    { name: "Omar", grade: 80 }, 
    { name: "Mona",grade: 90 }, 
    { name: "Ali", grade: 70 }
]
for (var student of students)
    console.log(student);

// 26
console.log(students.map(function (student) {
    if (student.grade >= 80)
        return student.name;
}));


// 27
var products = [
  {
    name: "Wireless Headphones",
    price: 99.99
  },
  {
    name: "Mechanical Keyboard",
    price: 129.50
  },
  {
    name: "Gaming Mouse",
    price: 59.99
  },
  {
    name: "USB-C Hub",
    price: 34.99
  },
  {
    name: "Portable Power Bank",
    price: 45.00
  }
]
console.log(products.reduce(function (acc, product) {
    return acc + product.price;
}, 0));

// 28
var arr = ["js", "html", "css", "js", "react", "js"], count = 0
for (var i of arr)
    if (i == 'js')
        count++;
console.log(count);

// 29
var classroom = {
  teacher: "Mr. Davis",
  students: ["Alex", "Brianna", "Carlos", "Devon"]
}
console.log(`Teacher Name: ${classroom.teacher}\nNo of students: ${classroom.students.length}\nLast studetn name: ${classroom.students[classroom.students.length - 1]}`);

// 30
var items = [
    { id: 1, title: "Pen", price: 10 }, 
    { id: 2, title: "Book",price: 50 }, 
    { id: 3, title: "Bag", price: 25 }
]
console.log(items.map(function (item) {
    return item.title.toUpperCase();
}));
console.log(items.map(function (item) {
    if (item.price < 30)
        return item;
}));
console.log(items.reduce((acc, item) => acc + item.price, 0));

