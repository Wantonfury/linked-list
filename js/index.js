import LinkedList from './linkedList.js';

const list = new LinkedList();

console.log(list.size()); // Return 0
console.log(list.head()); // Return null

list.append(0);
list.prepend(1);

console.log('=============================');
console.log(list.size()); // 2
console.log(list.head().value); // 1
console.log(list.tail().value); // 0

list.append(4);
list.prepend(5);
// 5 1 0 4

console.log('=============================');
console.log(list.at(2)); // 0

console.log(list.toString()); // 5 1 0 4
list.pop();
console.log(list.toString()) // 5 1 0

console.log('=============================');
console.log(list.contains(1)); // true
console.log(list.contains(6)); // false

console.log(list.find(0)); // 2
console.log(list.find(7)); // null

console.log('=============================');
list.insertAt(6, 1);
console.log(list.toString()); // 5 6 1 0

list.removeAt(1);
console.log(list.toString()); // 5 1 0