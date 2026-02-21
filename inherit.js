// Inheritance in JavaScript allows one class to inherit properties and methods from another class. This is achieved using the `extends` keyword in ES6 and later versions of JavaScript. The class that inherits from another class is called a subclass or child class, while the class being inherited from is called a superclass or parent class.

// When a subclass extends a superclass, it can access all the properties and methods of the superclass. The subclass can also override methods of the superclass to provide its own implementation. This allows for code reuse and a clear hierarchical structure in object-oriented programming.

// In JavaScript, inheritance is implemented using prototypes. When a subclass extends a superclass, it creates a prototype chain that allows instances of the subclass to access properties and methods defined in the superclass. This is done using the `super` keyword, which allows the subclass to call the constructor and methods of the superclass.

// Overall, inheritance in JavaScript provides a powerful way to create and manage objects, allowing for code reuse and a clear organizational structure in object-oriented programming.

class Person {
  constructor(fname, lname){
    this.fname = fname;
    this.lname = lname;
  }
  
  greeting(){
    return `Hello ${this.fname}`;
  }
}

class Customer extends Person {
  constructor(fname, lname, dob){

    // The `super` keyword is used to call the constructor of the parent class (Person) and pass the necessary arguments (fname and lname) to it. This ensures that the properties defined in the Person class are properly initialized for instances of the Customer class.
    super(fname, lname);
    
    this.dob = dob;
  }
}

const c1 = new Customer('P', 'TM', '01-31-2002');

console.log(c1.greeting());