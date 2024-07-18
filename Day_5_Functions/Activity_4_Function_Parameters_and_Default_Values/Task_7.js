//Default function parameters allow named parameters to be initialized
//with default values if no value or undefined is passed.
function product (num1,num2=1){
    return num1*num2;
}

let ans1 = product(5,4);
console.log(ans1);

let ans2 = product(5);
console.log(ans2);

/*
Output:
20
5
*/