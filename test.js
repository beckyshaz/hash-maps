import { HashMap } from "./index.js";

const test = new HashMap();
console.log(test);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set("lion", "shaz");
test.set("kite", "green");

test.set("toby", "tony");
 
console.log(test.entries());

console.log(test.length());

//console.log(test.resize());

console.log(test.length())

console.log(test.has("kite"));
console.log(test.get("toby"));

console.log(test.clear());

console.log(test.length())
