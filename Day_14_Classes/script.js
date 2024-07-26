// Task 1: Define Person class
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }
  
    // Task 2: Add method to update age
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  
    // Task 7 & 8: Add getter and setter for full name
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    }
  }
  
  const person1 = new Person("Anmol", "Khatri", 20);
  console.log(person1.greet());
  person1.updateAge(21);
  
  // Task 5: Add static method to Person
  Person.genericGreeting = function() {
    return "Hello, I'm a person!";
  };
  
  console.log(Person.genericGreeting());
  
  // Task 3 & 4: Define Student class
  class Student extends Person {
    static studentCount = 0;
  
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
      Student.studentCount++;
    }
  
    getStudentId() {
      return this.studentId;
    }
  
    // Override greeting method
    greet() {
      return `Hello, I'm ${this.fullName}, age ${this.age}, and my student ID is ${this.studentId}.`;
    }
  
    // Task 6: Add static method to get student count
    static getStudentCount() {
      return Student.studentCount;
    }
  }
  
  const student1 = new Student("Anmol", "Khatri", 20, "22BCS10160");
  console.log(student1.getStudentId());
  console.log(student1.greet());
  
  const student2 = new Student("Anmol", "Khatri", 21, "22BCS10160");
  console.log(`Total number of students: ${Student.getStudentCount()}`);
  
  // Demonstrate getter and setter
  console.log(`Full name: ${person1.fullName}`);
  person1.fullName = "Anmol Khatri";
  console.log(`Updated full name: ${person1.fullName}`);
  
  // Task 9 & 10: Define and test Account class
  class Account {
    #balance = 0;
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  }
  
  const account1 = new Account();
  account1.deposit(1000);
  account1.withdraw(500);
  account1.withdraw(700);