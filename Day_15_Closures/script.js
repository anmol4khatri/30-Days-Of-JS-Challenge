// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope
function createInnerFunction(outerVariable) {
    return function innerFunction() {
      console.log("Inner function accessing outer variable:", outerVariable);
    };
  }
  
  const inner = createInnerFunction("Hello from outer");
  inner(); // Logs: Inner function accessing outer variable: Hello from outer
  
  // Task 2: Create a closure that maintains a private counter
  function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // Logs: 1
  
  // Task 3: Write a function that generates unique IDs
  function createIdGenerator() {
    let lastId = 0;
    return function() {
      lastId++;
      return `ID_${lastId}`;
    };
  }
  
  const generateId = createIdGenerator();
  console.log(generateId()); // Logs: ID_1
  console.log(generateId()); // Logs: ID_2
  
  // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name
  function createGreeter(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetAlice = createGreeter("Alice");
  greetAlice(); // Logs: Hello, Alice!
  
  // Task 5: Write a loop that creates an array of functions
  function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
      functions.push(function() {
        console.log(`Function at index ${i}`);
      });
    }
    return functions;
  }
  
  const functionArray = createFunctionArray();
  functionArray[2](); // Logs: Function at index 2
  
  // Task 6: Use closures to create a simple module for managing a collection of items
  function createItemManager() {
    const items = [];
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return [...items];
      }
    };
  }
  
  const itemManager = createItemManager();
  itemManager.addItem("Apple");
  itemManager.addItem("Banana");
  console.log(itemManager.listItems()); // Logs: ["Apple", "Banana"]
  
  // Task 7: Write a function that memoizes the results of another function
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  
  function expensiveOperation(n) {
    console.log("Performing expensive operation");
    return n * 2;
  }
  
  const memoizedOperation = memoize(expensiveOperation);
  console.log(memoizedOperation(5)); // Logs: Performing expensive operation, 10
  console.log(memoizedOperation(5)); // Logs: 10 (from cache)
  
  // Task 8: Create a memoized version of a function that calculates the factorial of a number
  function memoizedFactorial() {
    const cache = {};
    function factorial(n) {
      if (n in cache) return cache[n];
      if (n <= 1) return 1;
      const result = n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
    return factorial;
  }
  
  const factorial = memoizedFactorial();
  console.log(factorial(5)); // Logs: 120
  console.log(factorial(5)); // Logs: 120 (from cache)