var data = [
    {'name': 'Ali', 'city': 'CAI'},
    {'name': 'Ahmed', 'city': 'GZA'},
    {'name': 'Mona', 'city': 'CAI'}
];

var final = {};

for (var obj of data){
    final[obj.city] = final[obj.city] || [];
    final[obj.city].push(obj);
}
console.log(final);