console.log("Task 1: Bubble Sort");
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const bubbleSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort Result:", bubbleSort(bubbleSortArray));

console.log("\nTask 2: Selection Sort");
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

const selectionSortArray = [64, 25, 12, 22, 11];
console.log("Selection Sort Result:", selectionSort(selectionSortArray));

console.log("\nTask 3: Quicksort");
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

const quickSortArray = [3, 6, 8, 10, 1, 2, 1];
console.log("Quicksort Result:", quickSort(quickSortArray));

console.log("\nTask 4: Linear Search");
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const linearSearchArray = [2, 3, 4, 10, 40];
console.log("Linear Search Result:", linearSearch(linearSearchArray, 10));

console.log("\nTask 5: Binary Search");
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const binarySearchArray = [2, 3, 4, 10, 40];
console.log("Binary Search Result:", binarySearch(binarySearchArray, 10));

console.log("\nTask 6: Count Character Occurrences");
function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log("Character Count:", countCharacters("hello world"));

console.log("\nTask 7: Longest Substring Without Repeating Characters");
function longestSubstring(str) {
    let longest = 0;
    let start = 0;
    const seen = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char] >= start) {
            start = seen[char] + 1;
        }
        seen[char] = i;
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}

console.log("Longest Substring Length:", longestSubstring("abcabcbb"));

console.log("\nTask 8: Rotate Array");
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

const rotateArrayInput = [1, 2, 3, 4, 5];
console.log("Rotated Array:", rotateArray(rotateArrayInput, 2));

console.log("\nTask 9: Merge Sorted Arrays");
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}

const arr1 = [1, 3, 5], arr2 = [2, 4, 6];
console.log("Merged Sorted Array:", mergeSortedArrays(arr1, arr2));