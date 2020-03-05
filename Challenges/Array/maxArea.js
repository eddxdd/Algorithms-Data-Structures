// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

// Time: O(n) Space: O(1)
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let min = Math.min(height[left], height[right]);
        let capacity = min * (right - left);
        max = Math.max(max, capacity);

        if (height[left] < height[right]) {
            left++;
        } else right--;
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));