// A class is a blueprint for creating objects. It defines a set of properties and methods that the objects created from the class will have. In JavaScript, classes were introduced in ES6 (ECMAScript 2015) as a syntactical sugar over the existing prototype-based inheritance.

// A class can be defined using the `class` keyword, followed by the class name and a block of code that contains the constructor and methods. The constructor is a special method that is called when a new instance of the class is created, and it is used to initialize the properties of the object.

// Classes in JavaScript are primarily syntactic sugar over the existing prototype-based inheritance. They provide a more familiar and structured way to create objects and manage inheritance, but under the hood, they still use prototypes to achieve inheritance and method sharing among instances.

// The class syntax makes it easier to create and manage objects, especially for developers coming from other object-oriented programming languages. It also provides a clearer and more concise way to define constructors and methods, improving code readability and maintainability.

// In addition to instance methods, classes can also have static methods. Static methods are called on the class itself, rather than on instances of the class. They are often used for utility functions that are related to the class but do not require access to instance properties.

// Overall, classes in JavaScript provide a more intuitive and organized way to create and manage objects, while still leveraging the underlying prototype-based inheritance system.

// Example of a class in JavaScript

class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    greeting() {
        return `Hello ${this.fname}`;
    }

    // Static method: A static method is a method that belongs to the class itself, rather than to instances of the class. Static methods are called on the class, not on instances of the class. They are often used for utility functions that are related to the class but do not require access to instance properties.
    static info() {
        return 'This is a Person class';
    }
}

const p1 = new Person('P', 'TM');

console.log(p1.greeting());
console.log(Person.info());