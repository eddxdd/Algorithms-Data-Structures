// Write a function called maxSubarraySum
// Given an array of integers and a number, find the maximum sum of a subarray with the length of the number passed to the function

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    // Storing the first 2 values in total
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }

    // Let's put total in a temporary variable to utilise it
    let currentTotal = total;
    // Iterate over array starting at num
    // Because now we want to use currentTotal to store those values
    // Then at the end get the maximum value
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i-num];
        // Get the max
        total = Math.max(total, currentTotal);

    }
    return total;
}

console.log(maxSubarraySum([0,10,50,70,80,100,200,300,400], 2));