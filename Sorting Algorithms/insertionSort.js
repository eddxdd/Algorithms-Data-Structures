// Write a function called insertionSort()
// Takes an array, and returns sorted array
// For Insertion Sort, you compare the [0] and [1] and sort if necessary
// Then after, if the next element is in the incorrect order, always iterate it through the sorted portion of the array
// Worst case: O(n^2) [4,3,2,1]
// Works well with somewhat sorted data: [1,2,3,5,4] O(n)
// Space: O(1)
// Good case: Because we keep one side of it alredy sorted, if there's an input/live algorithm that needs to be sorted then insertion sort can be effective.
// p.s. pay attention to use of "var" for scoping rules

function insertionSort(arr) {
    // "If i == [4], then j goes through [3],[2],[1],[0]..."
    for (var i = 1; i < arr.length; i++) {
        // This variable will keep track of what value we're currently looking at
        let currentVal = arr[i];
        // Keep going so long as j >= 0 and arr[j] > currentVal
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // This moves the value
            // [j+1] because we want to place it after the smaller value
            arr[j+1] = arr[j];
        }
        // After previous loop finishes, we have the correct spot for currentVal
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([2,1,9,15,5])); // [1,2,5,9,15]