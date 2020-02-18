// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Brute Force (slower)
// Time: O(n^2) Space: O(1)
function twoSums(nums, target) {
    for(var i = 0; i< nums.length; i++){
		// eg. nums[i] === 3, target === 7, the complement will be 4
        var complement = target - nums[i];
		
		// Iterate the rest of the number and check if the complement of nums[i] exists
		// This part takes a lot of time
        var found = nums.indexOf(complement, i + 1);
        if(found !== -1){
            return [i, found];
        }
    }
    return [0, 0];
};

// Hash (much faster)
// Time: O(n) Space: O(n)
function twoSumsHash(nums, target) {
    if (nums.length === 2) return [0, 1];
    var hash={};
    for (let i = 0; i < nums.length; i++) {
        // If it's in the hash, return it. Otherwise create a new key and value.
        if (target-nums[i] in hash) {
            return [hash[target-nums[i]],i]
        } else {
        hash[nums[i]]=i;
        }
    }
};

console.log(twoSums([2,7,11,15], 9));

console.log(twoSumsHash([2,7,11,15], 9));