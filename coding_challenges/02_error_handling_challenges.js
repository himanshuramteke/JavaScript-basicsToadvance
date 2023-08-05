// 1. Type Conversion.

// Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output.

function convertToNumber(str) {
    try {
      const num = Number(str);
      if (Number.isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    } catch (error) {
      return error.message;
    }
  }
  
  console.log(convertToNumber("123"));
  console.log(convertToNumber("abc"));
   
  // 2. Building Robust Functions in JavaScript
  
  // Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.
  
  function getPerson(person) {
    try {
      if (typeof person !== "object" || !person.name || !person.age) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  // Expected Output
  console.log(getPerson({ name: "Mithun", age: 20 })); // Name: Mithun, Age: 20
  console.log(getPerson({ name: "Mithun" })); // Invalid parameter type
  console.log(getPerson(["name", "Mithun"])); // Invalid parameter type

// 3. Car Description Class.

// Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.

// Expected Output

// console.log(myCar.getDescription());
// Output: This is a 2022 Skoda Rapid.

class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
  }
  
  const myCar = new Car("Skoda", "Rapid", 2022);
  
  console.log(myCar.getDescription()); // Output: This is a 2022 Skoda Rapid.
  
  /*
  4. Employee Class Challenge.
  
  Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.
  
  Expected Output:
  console.log(employee1.getSalary()); // Output: 80000
  */
  
  class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  const employee1 = new Employee("Prabir Kumar", "Software Engineer", 80000);
  
  // Expected Output
  console.log(employee1.getSalary()); // Output: 80000  
  /*
  
  5. Implementing a Person Class with Default Values
  
  Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.
  
  Expected Output
  
  const person1 = new Person("Mithun", 20);
  console.log(person1.getDetails()); // Output: "Name: Mithun, Age: 20"
  
  const person2 = new Person();
  console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"
  
  */
  
  class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Expected Output
  
  const person1 = new Person("Mithun", 20);
  console.log(person1.getDetails()); // Output: "Name: Mithun, Age: 20"
  
  const person2 = new Person();
  console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"
  
  
  
  