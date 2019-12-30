// Write a function called countUniqueValues, which accepts a sorted array of integers.
// This function should count the # of unique values in the array.

function countUniqueValues(arr) {
    // Edge case: if 0 just return 0 already without going through the loop
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        // Only move i forward if it isn't equal to j
        if (arr[i] !== arr[j]) {
            i++;
            // i moves up
            // assign j to i
            arr[i] = arr[j];
        }
        // Then when i == j again, don't assign it, move j up
        // Until previous 'if' statement becomes true again
    }
    // Return i + 1 (cause we start at 1)
    return "Total: " + (i + 1);
}

console.log(countUniqueValues([1,1,1,1,1,3])) // 2