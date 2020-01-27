// DP: A method for solving a complex problem by breaking it down int oa collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.
// Only used with: Optimal Substructure & Overlapping Subproblems
// Optimal Substructure is if an optimal solution can be constructed from the optimal solutions of its subproblems.
// Overlapping Subproblem is if it can be broken down into subproblems which are reused several times.

// example: fibonacci sequence (recursive)
// Big O: O(2^n) approximate. Not good!!
// function fib(n) {
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// Memoization: Storing the results of expensive function calls and returning the cached result when the same input happens again
// Big O: O(n)
// function fib(n, memo=[]) {
//     // If we have already previously solved it, just return that value
//     if (memo[n] !== undefined) return memo[n];
//     if (n <= 2) return 1;
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;  // Here we store it
//     return res;
// }

// Shorter version with preprogrammed basics
function fib(n, memo=[undefined,1,1]) {
    // If we have already previously solved it, just return that value
    if (memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;  // Here we store it
    return res;
}

// Tabulation: Store the result of a previous result in a "table" (usually an array)
// Usually done with iteration
// Better space complexity can be achieved using tabulation
// function fib(n) {
//     if (n <= 2) return 1;
//     var fibNums = [0,1,1];
//     for (var i = 3; i <= n; i++) {
//         fibNums[i] = fibNums[i-1] + fibNums[i-2];
//     }
//     return fibNums[n];
// }

// * The difference here is the recursive version will take a lot of space to complete because of the call stack size.
// * Tabulation however, has better space complexity, so it is possible to do it.
// * console.log(fib(10000)); for an example.