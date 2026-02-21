// Prototype Inheritance

// In JavaScript, every function has a property called prototype. This prototype is an object that can have properties and methods. When you create an instance of a constructor function, it inherits properties and methods from the constructor's prototype. This is how JavaScript implements inheritance.

// When you create a new instance of a constructor function, it has access to the properties and methods defined on the constructor's prototype. This allows you to share common functionality across all instances of a constructor without having to define it on each instance.

// For example, if you have a constructor function for creating person objects, you can define a method on the prototype that all person instances can use:

function Person(fname, lname){
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.greeting = function() {
  return `Hello ${this.fname}`;
}

const p1 = new Person('P', 'TM');

function Customer(fname, lname, phone) {
  // .call() → "Run this function right now with this context(context which i passed) and these arguments"
  Person.call(this, fname, lname);
  this.phone = phone
}

Customer.prototype = Object.create(Person.prototype);

let c1 = new Customer('P','TM','555-555-5555')

Customer.prototype.greeting = function(){
  return `Welcome ${this.fname}`;
}

console.log(p1.greeting.call(c1));
console.log(c1.greeting());