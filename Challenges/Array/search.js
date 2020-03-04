// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Your algorithm's runtime complexity must be in the order of O(log n).
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// When you divide the rotated array into two halves, using mid index, at least one of them should remain sorted ALWAYS.
// If you know one side is sorted, the rest of logic becomes very simple.
// If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // When dividing the rotated array into two halves, one must be sorted
        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target <= nums[mid]) right = mid - 1;   // Target is in the left side
            else left = mid + 1;    // Target is in the right side
        } else {    // Else, the right side is sorted
            if (target >= nums[mid] && target <= nums[right]) left = mid + 1;   // Target is in the right side
            else right = mid - 1;   // Target is in the left side
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));