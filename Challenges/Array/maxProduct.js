// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Time: O(n) Space: O(1)
var maxProduct = function(nums) {
    let max = -Infinity;
    let currMax = 1;
    let currMin = 1;
    
    for (let i = 0; i < nums.length; i++) {
        let prevMax = currMax;
        currMax = Math.max(nums[i], prevMax * nums[i], currMin * nums[i]);
        currMin = Math.min(nums[i], prevMax * nums[i], currMin * nums[i]);
        max = Math.max(currMax, max);
    }
    return max;
};

console.log(maxProduct([-2]));