// Built in Constructors are the constructors that are provided by JavaScript to create objects of different types. These constructors are used to create objects of different types such as strings, numbers, booleans, functions, objects, arrays, and regular expressions.

// This sometime slows down the performance of the code because it creates an object instead of a primitive value. So it is recommended to use primitive values instead of objects when possible.

// There are some built in constructors in JavaScript which we can use to create objects of different types. These constructors are:

// Strings 
const name1 = 'PTM'; // Returns primitive value
const name2 = new String('PTM'); // Returns object

// name2.foo = 'bar' // Just this which is not usefull we can do using object

// console.log(typeof name1); // string
// console.log(typeof name2); // object

console.log(name2 == 'PTM'); // true cause it is gonna check just the value
console.log(name2 === 'PTM'); // false cause it is also gonna check type

// Number
const n1 = 5;
const n2 = new Number(5);

console.log(n1, n2);

// Boolean
const b1 = true;
const b2 = new Boolean(true);

console.log(b1,b2);

// Functions
const f1 = new Function('x', 'y', 'return x + y');
console.log(f1(1,3));

// Objects
const o1 = new Object({name : 'PTM'});
console.log(o1);

// Arrays 
const a1 = new Array(1,1,2,3,4);
console.log(a1);

// Reg Exp
const r1 = new RegExp('\\w+');
console.log(r1);


