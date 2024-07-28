console.log("Task 1: Recursive Factorial");
// Task 1: Write a recursive function to calculate the factorial of a number
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial Tests:");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(10)); // 3628800

console.log("\nTask 2: Recursive Fibonacci");
// Task 2: Write a recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci Tests:");
console.log(fibonacci(7)); // 13
console.log(fibonacci(1)); // 1
console.log(fibonacci(10)); // 55

console.log("\nTask 3: Recursive Sum of Array");
// Task 3: Write a recursive function to find the sum of all elements in an array
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of Array Tests:");
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([])); // 0
console.log(sumArray([10, 20, 30])); // 60

console.log("\nTask 4: Recursive Maximum Element in Array");
// Task 4: Write a recursive function to find the maximum element in an array
function maxElement(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxElement(arr.slice(1)));
}

console.log("Maximum Element Tests:");
console.log(maxElement([1, 5, 3, 9, 2])); // 9
console.log(maxElement([100])); // 100
console.log(maxElement([-5, -2, -10, -1])); // -1

console.log("\nTask 5: Recursive String Reversal");
// Task 5: Write a recursive function to reverse a string
function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log("String Reversal Tests:");
console.log(reverseString("hello")); // olleh
console.log(reverseString("")); // ""
console.log(reverseString("recursion")); // noisrucer

console.log("\nTask 6: Recursive Palindrome Check");
// Task 6: Write a recursive function to check if a string is a palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}

console.log("Palindrome Check Tests:");
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true

console.log("\nTask 7: Recursive Binary Search");
// Task 7: Write a recursive function to perform a binary search on a sorted array
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

console.log("Binary Search Tests:");
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // -1
console.log(binarySearch([1, 3, 5, 7, 9], 1)); // 0

console.log("\nTask 8: Recursive Count Occurrences");
// Task 8: Write a recursive function to count the occurrences of a target element in an array
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log("Count Occurrences Tests:");
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // 5
