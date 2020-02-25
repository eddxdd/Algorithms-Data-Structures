// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/* Kadane's Algorithm
The logic is that this algorithm matters mainly when there are negative integers in the array, as if the array was all positive integers, then the max subarray would be the sum of the entire array.

To handle negative integers, we need to keep track of:

what the maximum sum of values to the left of a given integer is at all times, and
what the maximum sum of "all time" is
by starting of at -Infinity we ensure that the initial pass will set values (if you start with 0 and have an array of all negative integers, then the variables will never have updated values as 0 is always > negative numbers.
*/

// Time: O(n) Space: O(1)
var maxSubArray = function(nums) {
    let maxSoFar = -Infinity;
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        maxSoFar = Math.max(maxSoFar + nums[i], nums[i]);
        max = Math.max(max, maxSoFar);
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));