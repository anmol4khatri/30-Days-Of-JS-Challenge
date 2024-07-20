function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));
console.log(sum(10));

/*
Output:

6
22
10
*/