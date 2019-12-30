// Write a function called naiveSearch
// That accepts a long string and a pattern
// Loop over the long string
// Loop over the pattern
// If the characters don't match, break out of inner loop
// If match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function naiveSearch(long, pattern) {
    let count = 0;
    // Loop through every character
    for (let i = 0; i < long.length; i++) {
        // Same for pattern string
        for (let j = 0; j < pattern.length; j++) {
            // If not a match, break out
            if (pattern[j] !== long[i+j]) {
                break;
            }
            // If there's a match, add to the count
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol")); // Searching for occurrences of "lol"