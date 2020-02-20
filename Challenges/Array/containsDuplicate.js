// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// Input: [1,2,3,1]
// Output: true

// Hash 
function containsDuplicate(nums) {
    var hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false;
}

// Time: O(1) Space: O(1)
// This works because .size accessor returns the number of UNIQUE elements in a set()

// function containsDuplicate2(nums) {
//     return new Set(nums).size < nums.length;
// }
containsDuplicateFast = nums => new Set(nums).size < nums.length;

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicateFast([1,2,3,1]));