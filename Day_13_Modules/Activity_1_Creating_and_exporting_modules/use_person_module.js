import { Person } from './person_module.js';

Person.setName('John', 'Doe');
Person.setAge(30);

console.log(Person.getFullName()); // Output: John Doe
console.log(Person.age); // Output: 30