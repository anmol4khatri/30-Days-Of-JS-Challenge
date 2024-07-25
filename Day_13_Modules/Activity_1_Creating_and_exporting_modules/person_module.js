export const Person = {
    firstName: '',
    lastName: '',
    age: 0,
    
    setName(first, last) {
      this.firstName = first;
      this.lastName = last;
    },
    
    setAge(age) {
      this.age = age;
    },
    
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };