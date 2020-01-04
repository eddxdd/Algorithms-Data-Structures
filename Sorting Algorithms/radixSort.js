// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to largest number of digits

function getDigit(num, i) {
    // Math.abs returns the absolute val of a number
    // Math.pow returns the base to the exponent power
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to get the # of digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, returns the number of digits in the largest numbers in the list
// Loop through nums to find the maxDigits
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // Array of 10 empty arrays
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) { // for each number
            // First time through it should return the digit at [0] (starting from the right)
            // Then 'k' goes up
            // Then it loops again and returns the digit at [1], [2], etc...
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        // Spread digitBuckets and concat it to [] array
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
}

console.log(radixSort([23,345,5467,12,2345,9852])); // [ 12, 23, 345, 2345, 5467, 9852 ]