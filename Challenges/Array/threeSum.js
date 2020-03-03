// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Given array nums = [-1, 0, 1, 2, -1, -4]
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Note: The solution set must not contain duplicate triplets.

var threeSum = function(nums, target = 0) {
    const result = [];

    // If there are less than 3 values, return an empty array.
    if (nums.length < 3) return result;

    // Sort
    nums = nums.sort((a,b) => a - b);

    // Using i as the anchor as we move through the array
    // We stop at nums.length - 2to prevent undefined for k
    for (let i = 0; i < nums.length - 2; i++) {
        // Since we already sorted, we can stop here if the current iterator is > target
        if (nums[i] > target) break;

        // If current iterator is the same as previous
        // Skip to prevent duplicates
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        // Walking j and k towards each other to find all possible values
        // With i as our anchor value
        while (j < k) {

        }        
    }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));