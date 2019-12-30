// Write a function called binarySearch
// Which goes through an array and finds n
// Binary starts at i = 0 && j = (arr.length-1) and returns the middle
// If n > avg then i = avg otherwise if n < avg then j = avg
// array MUST BE SORTED for binary search!

function binarySearch(arr, n) {
    // Set variables for start, end, middle (rounded down)
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    // While middle isn't the answer
    // And start <= end (or else we get infinite loop)
    while(arr[middle] !== n && start <= end) {
        // If n is smaller, assign new end to middle - 1 (and subtract/add 1 because we already know it isn't the previous middle)
        if (n < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        // Now call middle again to find the avg of the new values
        middle = Math.floor((start + end) / 2);
    }
    // Out of loop
    // Finally, return middle when we find it or -1 if we don't
    if (arr[middle] == n) {
        return middle;
    }
    return - 1;
}

console.log(binarySearch([1,2,3,4,5], 2)); // 1