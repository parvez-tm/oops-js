// What is Prototype in JavaScript?
// Prototype is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It is a powerful mechanism that enables code reuse and the creation of complex data structures. In JavaScript, every object has a prototype, which is another object that serves as a template for the original object. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property or reaches the end of the chain (null).

// In JavaScript, a prototype is an object that acts as a blueprint, allowing other objects to inherit properties and methods. This mechanism is central to JavaScript's object-oriented programming model (prototypal inheritance), providing a way to share behavior among instances and optimize memory usage.

// The prototype is often used to add methods to constructor functions, allowing all instances created by that constructor to share the same methods without having to define them on each instance. This can save memory and improve performance.

// For example, if we have a constructor function for creating person objects, we can add a method to the prototype of that constructor so that all person objects can use it:

function Person(name, dob) {
    this.name = name; // Assign the name property
    this.birthday = new Date(dob);   // Assign the age property
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const getAge = Math.abs(new Date(diff).getUTCFullYear() - 1970);
    //     return getAge;
    // }
}

Person.prototype.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const getAge = Math.abs(new Date(diff).getUTCFullYear() - 1970);
        return getAge;
    }

const ptm = new Person('PTM', '01-31-2002');
console.log(ptm.calculateAge());


console.log(ptm.hasOwnProperty('calculateAge'))

//We can also modify the property using prototypes
Person.prototype.changeName = function (newName) {
    this.name = newName;
};
ptm.changeName('LOL');
console.log(ptm.name);


// You can add a method to all arrays by modifying the Array prototype: 

Array.prototype.addTwo = function() {
  return this.map(item => item + 2);
};

const myArray = [1, 2, 3];
console.log(myArray.addTwo()); // Output: [3, 4, 5]
// In this example, the addTwo method is available on myArray even though it was not defined directly on the array instance, because it was added to the shared Array.prototype. 


// --------------------------------------------

// Every time you call new Person(...), a brand new function object is created and attached to that instance. 1000 persons = 1000 identical copies of calculateAge in memory.

// By using the prototype, we can store the calculateAge method in a single place (the prototype) and all instances of Person will share that method. This way, we save memory and improve performance, especially when creating many instances of the Person constructor.

// The function exists only once in memory. All instances share it via the prototype chain.

/*
╔══════════════════════════════════════════════════════════════════════╗
║                    CONSTRUCTOR vs PROTOTYPE (JS)                     ║
╠════════════════╦══════════════════════════════╦══════════════════════╣
║     Aspect     ║        In Constructor        ║     On Prototype     ║
╠════════════════╬══════════════════════════════╬══════════════════════╣
║ Memory         ║ 🧠 One copy per instance     ║ ♻️ One shared copy  ║
║                ║ (new function every time)    ║ (shared across all)  ║
╠════════════════╬══════════════════════════════╬══════════════════════╣
║ Lookup         ║ ⚡ Direct property access    ║ 🔎 Prototype chain  ║
║                ║ (slightly faster)            ║ (negligibly slower)  ║
╠════════════════╬══════════════════════════════╬══════════════════════╣
║ Override       ║ 🎯 Per-instance by default  ║ 🛠 Can override per   ║
║                ║                              ║ instance if needed   ║
╠════════════════╬══════════════════════════════╬══════════════════════╣
║ Scaling        ║ 📈 Memory grows linearly     ║ 📦 Memory stays     ║
║                ║ with number of instances     ║ constant for methods ║
╚════════════════╩══════════════════════════════╩══════════════════════╝
*/

/**
 * ╭────────────────────────────────────────────────────────────────╮
 * │              Constructor  vs  Prototype (JavaScript)           │
 * ├─────────────────┬────────────────────────┬─────────────────────┤
 * │ Aspect          │ In Constructor         │ On Prototype        │
 * ├─────────────────┼────────────────────────┼─────────────────────┤
 * │ Memory          │ New copy per instance  │ One shared copy     │
 * │                 │ (function recreated)   │ (memory efficient)  │
 * ├─────────────────┼────────────────────────┼─────────────────────┤
 * │ Lookup          │ Direct property access │ Prototype chain     │
 * │                 │ (slightly faster)      │ (almost same speed) │
 * ├─────────────────┼────────────────────────┼─────────────────────┤
 * │ Override        │ Default per instance   │ Can override per    │
 * │                 │                        │ instance if needed  │
 * ├─────────────────┼────────────────────────┼─────────────────────┤
 * │ Scaling         │ Memory grows with      │ Memory stays        │
 * │                 │ number of objects      │ constant for methods│
 * ╰─────────────────┴────────────────────────┴─────────────────────╯
 */

// Use prototype for any method that doesn't need access to private/local variables. It keeps one copy in memory regardless of how many instances you create.