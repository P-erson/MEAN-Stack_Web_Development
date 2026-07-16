var items = []
function add(item){
    items.push(item);
}
function read(){
    items.forEach((item) => console.log(item))
    console.log('==============END READ==============');
    
}
function update(oldItem, newItem){
    var index = items.indexOf(oldItem);
    items[index] = newItem;
}
function deleteItem(item){
    items.splice(items.indexOf(item), 1);
}

add('pen');
add('pencil');
add('eraser');

read();

update('pen', 'sharpener');
read();

deleteItem('eraser');
read();