const existingArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...existingArray, ...additionalElements];
console.log(newArray);


/*
Output:

[ 1, 2, 3, 4, 5, 6 ]
*/