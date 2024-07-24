// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function task1ThrowError() {
    try {
      throw new Error("This is an intentional error for Task 1");
    } catch (error) {
      console.log("Task 1 Error caught:", error.message);
    }
  }
  task1ThrowError();
  
  // Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
  function task2DivideNumbers(numerator, denominator) {
    try {
      if (denominator === 0) {
        throw new Error("Cannot divide by zero");
      }
      const result = numerator / denominator;
      console.log("Task 2 Result:", result);
    } catch (error) {
      console.log("Task 2 Error caught:", error.message);
    }
  }
  task2DivideNumbers(10, 2);
  task2DivideNumbers(10, 0);
  
  // Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
  function task3TryCatchFinally() {
    try {
      console.log("Task 3: Try block executed");
      throw new Error("Task 3 error");
    } catch (error) {
      console.log("Task 3: Catch block executed", error.message);
    } finally {
      console.log("Task 3: Finally block executed");
    }
  }
  task3TryCatchFinally();
  
  // Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
  class Task4CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "Task4CustomError";
    }
  }
  
  function task4ThrowCustomError() {
    try {
      throw new Task4CustomError("This is a custom error for Task 4");
    } catch (error) {
      if (error instanceof Task4CustomError) {
        console.log("Task 4: Caught custom error:", error.message);
      } else {
        console.log("Task 4: Caught unexpected error:", error);
      }
    }
  }
  task4ThrowCustomError();
  
  // Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
  class Task5ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "Task5ValidationError";
    }
  }
  
  function task5ValidateInput(input) {
    try {
      if (!input || input.trim() === "") {
        throw new Task5ValidationError("Input cannot be empty");
      }
      console.log("Task 5: Input is valid:", input);
    } catch (error) {
      if (error instanceof Task5ValidationError) {
        console.log("Task 5: Validation error:", error.message);
      } else {
        console.log("Task 5: Unexpected error:", error);
      }
    }
  }
  task5ValidateInput("Hello");
  task5ValidateInput("");
  
  // Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
  function task6RandomPromise() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve("Task 6: Promise resolved");
      } else {
        reject("Task 6: Promise rejected");
      }
    });
  }
  
  task6RandomPromise()
    .then(result => console.log(result))
    .catch(error => console.log("Task 6 Error caught:", error));
  
  // Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
  async function task7AsyncTryCatch() {
    try {
      const result = await task6RandomPromise(); // Reusing the function from Task 6
      console.log("Task 7:", result);
    } catch (error) {
      console.log("Task 7 Error caught:", error);
    }
  }
  task7AsyncTryCatch();
  
  // Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
  fetch('https://invalid-url-for-task8.com')
    .then(response => response.json())
    .then(data => console.log("Task 8: Data fetched:", data))
    .catch(error => console.log("Task 8 Error caught:", error.message));
  
  // Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
  async function task9AsyncFetch() {
    try {
      const response = await fetch('https://invalid-url-for-task9.com');
      const data = await response.json();
      console.log("Task 9: Data fetched:", data);
    } catch (error) {
      console.log("Task 9 Error caught:", error.message);
    }
  }
  task9AsyncFetch();