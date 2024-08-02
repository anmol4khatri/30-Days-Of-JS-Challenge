function reverse(x) {
    const isNegative = x < 0;
    x = Math.abs(x);
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (reversed > 2**31 - 1 || reversed < -(2**31)) return 0;
    return isNegative ? -reversed : reversed;
}

console.log(reverse(123));    // 321
console.log(reverse(-123));   // -321
console.log(reverse(120));    // 21
