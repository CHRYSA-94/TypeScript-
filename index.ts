export{}
// Exercises part 1
// Exercise 1: Write a tuple of string and number;

  let tup:[string, number] = ["Hello", 1];

// Exercise 2: Write a pure arrow function that returns a number.

  let ex2 = (num1: number, num2: number): number => num1 + num2 ;

// Exercise 3: Write a function that returns a string.

  function ex3(str: string) {
    return `${str}!!!`
  };

  ex3("Hello");
  // Exercise 4: Write a function that returns a void.

  function ex4(num4: number) {
      console.log(num4)
  }

  ex4(27);

// Exercise 5: Write an interface of the an object. const person = {name:
// 'costas', age: 40, address: { str: 'lala 40', city: 'Thessaloniki',
// post: 55132}}
  interface Person5 {
    name: string;
    age: number;
    address: {
      str: string;
      city: string;
      post: number
    }
  }

// Exercise 6: Write a class Person. it takes name and age and has a method
// that walk that prints walk. Make an instace from that class
  class Person {
    name: string;
    age: number;
    constructor(name: string, age:number) {
      this.name = name;
      this.age = age;
    }

    walk(){
      console.log("walk");
    }
  }


  const person = new Person("Chrysa", 26);







//let endsWith = (<string>message).endsWith("c");


// Exercises part 2
// Exercise 1: In index.ts add type assercion to the variable message;

  let message;
  message = "abc";

  let ex1par2 = <string>message ;


// Exercise 2: In index.ts create a function printDetails that takes an
// object with 2 properties as an argument, firstName and lastName and
// prints out the concatenation of these 2. Add an interface to the
// argument.

  interface Person2Par2 {
    firstName: string;
    lastName: string;
  }

  function printDetails(obj: Person2Par2) {
    console.log( obj.firstName + obj.lastName)

  }

  printDetails({firstName:"Chrysa", lastName:"Lazaridou"})

// Exercise 3: In index.ts create class User. It should take 3 arguments
// that are strings, firstName, lastName and age. It should have a method
// fullName that prints out the concatenation of both. Make lastName to
// have a default value of 'Patel' and the age optional. Also make it that
// you can't chage firstName after initialization.
  
  class User {
    private firstNme: string;
    lastName: string;
    age: string;
    constructor(firstName, lastName = "Patel" ,age?){
      this.firstNme = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    fullName() {
      console.log(`${this.firstNme} ${this.lastName}`);
    }
  }


