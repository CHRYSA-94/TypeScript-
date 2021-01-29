"use strict";
exports.__esModule = true;
// Exercises part 1
// Exercise 1: Write a tuple of string and number;
var tup = ["Hello", 1];
// Exercise 2: Write a pure arrow function that returns a number.
var ex2 = function (num1, num2) { return num1 + num2; };
// Exercise 3: Write a function that returns a string.
function ex3(str) {
    return str + "!!!";
}
;
ex3("Hello");
// Exercise 4: Write a function that returns a void.
function ex4(num4) {
    console.log(num4);
}
ex4(27);
// Exercise 6: Write a class Person. it takes name and age and has a method
// that walk that prints walk. Make an instace from that class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.walk = function () {
        console.log("walk");
    };
    return Person;
}());
var person = new Person("Chrysa", 26);
//let endsWith = (<string>message).endsWith("c");
// Exercises part 2
// Exercise 1: In index.ts add type assercion to the variable message;
var message;
message = "abc";
var ex1par2 = message;
function printDetails(obj) {
    console.log(obj.firstName + obj.lastName);
}
printDetails({ firstName: "Chrysa", lastName: "Lazaridou" });
// Exercise 3: In index.ts create class User. It should take 3 arguments
// that are strings, firstName, lastName and age. It should have a method
// fullName that prints out the concatenation of both. Make lastName to
// have a default value of 'Patel' and the age optional. Also make it that
// you can't chage firstName after initialization.
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        if (lastName === void 0) { lastName = "Patel"; }
        this.firstNme = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.fullName = function () {
        console.log(this.firstNme + " " + this.lastName);
    };
    return User;
}());
