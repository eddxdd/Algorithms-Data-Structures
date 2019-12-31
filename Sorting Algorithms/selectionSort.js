// Write a function called selectionSort()
// Takes an array, and returns sorted array
// Selection Sort finds a minimum, swaps at the end of loop and put it at the beginning
// O(n^2)
// Space: O(1)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // Only swap if i is not min
        if (i !== min) {
            // Swap
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([35,20,10,15,25])); // [10,15,20,25,35]