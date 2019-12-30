// Write a function called collectOddValues
// Which returns all odd values in an array
// Helper Method Recursion

function collectOddValues(arr) {
    // Create an empty array to store data
    // And then call helper function to populate it
    let result = [];

    // Recursion
    // With this method we can avoid our logic being reset every time through
    // And just do it once and populate result
    function helper(helperInput) {
        // If helperInput is empty
        if (helperInput.length === 0) {
            return;
        }
        // If the first input % 2 !== 0 (if it's odd)
        if (helperInput[0] % 2 !== 0) {
            // Push it to result
            result.push(helperInput[0]);
        }
        // Slice so we move to the next input value
        // Repeat until 0
        helper(helperInput.slice(1));
    }
    // Here we execute helper(arr) function
    helper(arr);
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));