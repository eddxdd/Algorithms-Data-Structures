// Write a recursive function called flatten
// Which accepts an array of arrays and returns a new array with all values flattened

function flatten(oldArr) {
    // Create empty array first
    let newArr = [];
    // Iterate over oldArr
    for (let i = 0; i < oldArr.length; i++) {
        // Check whether the value passed is an array (Array.isArray())
        if (Array.isArray(oldArr[i])) {
            // If it is then concat them together in newArr
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            // Otherwise, push it into the array (if it's an int or whatever)
            newArr.push(oldArr[i]);
        }
    }
    // Return newArr as an array with all the new values
    return newArr;
}

console.log(flatten([[1],[2],[3]])); // [1,2,3]