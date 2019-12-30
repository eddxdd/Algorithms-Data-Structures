// Write a recursive function called fib
// Which accepts a number and returns the nth number in the Fibonacci
// The Fibonacci sequence is the sequence of whole numbers "1,1,2,3,5,8,..." which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

function fib(n) {
    if (n <= 2) return 1;
    // n-1 (3) + n-2 (2) basically means the positions:
    // 1,1,2,3,5 etc..
    return fib(n-1) + fib(n-2);
}
console.log(fib(10)); // 55