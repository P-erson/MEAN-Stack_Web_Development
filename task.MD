Implement the following JavaScript code without the use of the `reduce` method.
```javascript
var data = [
    {'name': 'Ali', 'city': 'CAI'},
    {'name': 'Ahmed', 'city': 'GZA'},
    {'name': 'Mona', 'city': 'CAI'}
];
var categorieCountries = data.reduce(function(acc, u) {
    acc[u.city] = acc[u.city] || [];
    acc[u.city].push(u.name);
    return acc;
}, {});