// In ES5 and earlier versions of JavaScript, constructors were created using regular functions. The `this` keyword is used to assign properties to the object being created. When you call a constructor function with the `new` keyword, it creates a new object and sets `this` to that object.

// In JavaScript, a constructor is a special function that is used to create and initialize objects. It is typically defined with a capitalized name to distinguish it from regular functions.

// We can create constructors to initialize objects with specific properties and methods.

// Constructor function for creating a Person object
function Person(name, dob) {
    this.name = name; // Assign the name property
    this.birthday = new Date(dob);   // Assign the age property
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const getAge = Math.abs(new Date(diff).getUTCFullYear() - 1970);
        return getAge;
    }
}

const ptm = new Person('PTM', '01-31-2002');
console.log(ptm.calculateAge());