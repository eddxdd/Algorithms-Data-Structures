// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.

function sumZero(arr) {
    // Imagine 'i' starts from the left && 'j' starts from the right
    // Build your logic on i && j moving closer together
    // While validating to see if sum === 0
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        
        if (sum === 0) {
            return [arr[i], arr[j]];
        } else if (sum > 0) {
            j--;
        } else {
            i++;
        }
    }
}

console.log(sumZero([-5,-4,-3,-2,-1,0,1,2,3,6]))