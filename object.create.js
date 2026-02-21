// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// The Object.create() method is a powerful way to create objects in JavaScript. It allows you to create a new object that inherits properties and methods from an existing object, which can be useful for creating objects with shared behavior without the need for a constructor function.

// ES5 and earlier versions of JavaScript did not have the Object.create() method, so developers had to use constructor functions and prototypes to achieve similar functionality. With the introduction of Object.create(), it became easier to create objects with a specific prototype without the need for a constructor function.

// The Object.create() method takes two arguments: the first is the object that will be used as the prototype for the new object, and the second is an optional object that defines properties to be added to the new object. The new object created by Object.create() will have access to all properties and methods of the prototype object, allowing for efficient code reuse and a clear inheritance structure.

const personPrototype = {
  greeting: function(){
    return `Hello ${this.fname}`;
  }
};

const p1 = Object.create(personPrototype);
p1.fname = 'PTM';

console.log(p1.greeting());

const p2 = Object.create(personPrototype, {
  fname : { value: 'Shin'}
});

console.log(p2.greeting());
