// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.

function power(base, exponent) {
    // ^0 = 1
    if (exponent === 0) return 1;
    // 2 * the function with (exponent - 1) //(3, 2, 1...) recursion
    return base * power(base, exponent-1);
}

console.log(power(2,4)); // 16