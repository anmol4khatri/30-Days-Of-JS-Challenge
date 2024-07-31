console.log("Task 1: Match all occurrences of 'JavaScript'");
const task1Regex = /JavaScript/g;
const task1String = "I love JavaScript! JavaScript is awesome.";
console.log(task1String.match(task1Regex));

console.log("\nTask 2: Match all digits in a string");
const task2Regex = /\d/g;
const task2String = "There are 42 apples and 7 oranges.";
console.log(task2String.match(task2Regex));

console.log("\nTask 3: Match all words starting with a capital letter");
const task3Regex = /\b[A-Z]\w*/g;
const task3String = "The Quick Brown Fox Jumps Over The Lazy Dog.";
console.log(task3String.match(task3Regex));

console.log("\nTask 4: Match all sequences of one or more digits");
const task4Regex = /\d+/g;
const task4String = "There are 42 apples, 7 oranges, and 365 days in a year.";
console.log(task4String.match(task4Regex));

console.log("\nTask 5: Capture area code, central office code, and line number from US phone number");
const task5Regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const task5String = "(123) 456-7890";
console.log(task5String.match(task5Regex).slice(1));

console.log("\nTask 6: Capture username and domain from email address");
const task6Regex = /(\w+)@(\w+\.\w+)/;
const task6String = "user@example.com";
console.log(task6String.match(task6Regex).slice(1));

console.log("\nTask 7: Match a word only at the beginning of a string");
const task7Regex = /^Hello/;
const task7String1 = "Hello, world!";
const task7String2 = "World, Hello!";
console.log(task7Regex.test(task7String1), task7Regex.test(task7String2));

console.log("\nTask 8: Match a word only at the end of a string");
const task8Regex = /world!$/;
const task8String1 = "Hello, world!";
const task8String2 = "World, Hello!";
console.log(task8Regex.test(task8String1), task8Regex.test(task8String2));

console.log("\nTask 9: Validate a simple password");
const task9Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
const task9Password1 = "Abc123!@";
const task9Password2 = "weakpassword";
console.log(task9Regex.test(task9Password1), task9Regex.test(task9Password2));

console.log("\nTask 10: Validate a URL");
const task10Regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const task10Url1 = "https://www.google.com";
const task10Url2 = "not-a-url";
console.log(task10Regex.test(task10Url1), task10Regex.test(task10Url2));