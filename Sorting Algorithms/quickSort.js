// Write a function called quickSort()
// Which accepts two arrays, and returns the sorted array
// For quick sort: split -> sort -> merge. 
// For quick sort you must pick a pivot element, and place all lesser numbers to the left, and all greater numbers to the right.

function pivot(arr, start=0, end=arr.length-1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    // This variable keeps track of where will we swap our pivot to
    // Starts at start
    let swapIdx = start; 

    // Start at +1 because there's no need to compare start to itself
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            // If there's something less than 'start'
            // Move swapIdx up, so at the end we can swap start = swapIdx
            swapIdx++;
            // Each time through, swap swapIdx with i: 2 <-> 8 then 1 <-> 8... etc. Refer to console.
            // Which at the very end should place the 'start' at the correct spot
            swap(arr,swapIdx,i); 
            console.log(arr);
        }
    }
    swap(arr,start,swapIdx); // Now finally, after loop, swap start with swapIdx
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(pivot([4,8,2,1,5,7,6,3])); // Picking '4' should return index of 3