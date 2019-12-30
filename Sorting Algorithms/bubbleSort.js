// Write a function called bubbleSort
// Which takes in an array and returns the sorted ascending/numeric order of it

function bubbleSort(arr) {
    // Reason why we do this loop with i-- is so we don't repeat the whole loop over and over
    // Else the loop would go over 4 and return undefined
    // 'i' starts at arr.length
    for (let i = arr.length; i > 0; i--) {
        // Now we iterate j over (i - 1)
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            // "If the number on the left is bigger than the one on the right"
            if (arr[j] > arr[j+1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("THIS PASS IS COMPLETE") // Each time this is completed, 'i' decreases.
    }
    return arr;
}

console.log(bubbleSort([25,14,8,37,45])); // [8,14,25,37,45]

/* ES2015 Solution */

/* 
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap (arr, j, j+1);
            }
        }
    }
}
*/