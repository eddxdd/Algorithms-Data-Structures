// Write a function called mergeSort()
// Which accepts two arrays, and returns the sorted array
// For merge sort, you split the array into smaller arrays of 0 or 1 -> sort them -> merge back together
// Time: O(n log n) Space: O(n)

function mergeArray(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    // loop that runs while i < arr1.length && j < arr2.length
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]); // Push the smaller value to results
            i++; // After we push arr[i], move i up 
        } else {
            // If arr2[j] < arr1[i]
            results.push(arr2[j]);
            j++;
        }
    }

    // Once we hit the end length for one of them, 
    // merge the remaining of either array to the end
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    // Keep splitting up the arrays until the length is 0 or 1
    let mid = Math.floor(arr.length/2); // halfway point
    let left = mergeSort(arr.slice(0,mid)); // beginning to mid
    let right = mergeSort(arr.slice(mid)); // mid till the end
    // Now to merge it back
    return mergeArray(left, right);
}

console.log(mergeSort([1,10,50,2,14,99,100])); // [1,2,10,14,50,99,100]