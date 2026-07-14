var object = {'name':'ahmed', 'age':12, 'address':'cairo', 'as':'as'};

var numOfKeys = 0;
for (var obj in object){
    numOfKeys++;
}

console.log(numOfKeys);