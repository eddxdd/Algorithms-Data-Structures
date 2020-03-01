// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// You may assume no duplicate exists in the array.

// Input: [3,4,5,1,2] 
// Output: 1

// Time: O(n) Space: O(1)
// var findMin = function(nums) {
//     return Math.min(...nums);
// };

// Time: O(log n) Space: O(1)
var findMinOptmized = function(nums) {
    // If the list has just one element, return it
    if (nums.length === 1) return nums[0];

    // Initializing left and right pointers
    let left = 0;
    let right = nums.length - 1;

    // If the right > left, then there's no rotation
    if (nums[right] > nums[left]) return nums[left];

    // Binary Search
    while (right >= left) {
        // Find the mid element
        const mid = Math.floor((left + right) / 2);

        // If the mid element is greater than the next element then mid+1 is the smallest
        // This is the inflection point
        if (nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        }

        // If the mid element is lesser than the previous element then mid is the smallest
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        // If the mid element's value is greater than the 0th element
        // This means the smallest value is somewhere to the right of mid
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            // Else if nums[0] is greater than mid, then the smallest is to the left of mid
            right = mid - 1;
        }
    }
    return -1;
}

function findMinClean(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}

// console.log(findMin([3,4,5,1,2]));
console.log(findMinOptmized([2,1]));
console.log(findMinClean([2,1]));