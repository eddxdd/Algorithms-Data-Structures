// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(arr1, arr2) {
    // Pass arr1 && arr2 to string
    const arrS1 = arr1.toString();
    const arrS2 = arr2.toString();

    if (arrS1.length !== arrS2.length) return false;

    // Create empty object
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // For each val in arr
    for (let val of arrS1) {
        // Initialize it to 1 or add 1 if already exists.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arrS2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    /* Here we validate those values */
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}


console.log(sameFrequency(28,28)); // True