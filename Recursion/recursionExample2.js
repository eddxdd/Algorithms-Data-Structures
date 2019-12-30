// Write a function called collectOddValues
// Which returns all odd values in an array
// Pure Recursion

function collectOddValues(arr) {
    // Define empty array variable (this is each time through)
    let newArr = [];

    // If the arr input is empty, return newArr
    if(arr.length === 0) {
        return newArr;
    }

    // Check if the first number in arr is odd
    if(arr[0] %2 !== 0) {
        // If so, push into newArr
        newArr.push(arr[0]);
    }

    // Assign newArr to equal newArr (current value)
    // concatenate it
    // Then we repeatedly call the function with slice(1) to remove the first value and bring out the next until empty.
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// Ultimately this recursive function will stop when the array is empty
// Therefore it's OK to have newArr = []; at the beginning be reset every time
// Because at the end of concat/slice it will return everything (all odds)
console.log(collectOddValues([1,2,3,4,5,6,7,8,9])); // [1,3,5,7,9]