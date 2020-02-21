// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).
// Note 2: Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

var productExceptSelf = function(nums) {
    let L = [];
    let R = [];
    let output = [];

    L[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        L[i] = nums[i-1] * L[i-1];
    }

    R[nums.length - 1] = 1;
    for (let j = nums.length-2; j >= 0; j--) {
        R[j] = nums[j+1] * R[j+1];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = L[i] * R[i];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4]));