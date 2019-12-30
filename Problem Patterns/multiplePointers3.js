// Write a function called isSubsequence
// Which takes two strings and checks whether the characters in the first string form a subsequence of characters in the second string
// In other words: check if the characters in the first string appear somewhere in the second string in order.

function isSubsequence(arr1, arr2) {
    // Set 2 variables to 0
    let i = 0;
    let j = 0;
    // If arr1 is empty, return true
    if (!arr1) return true;
    while(j < arr2.length) {
        // If letter on arr2[j] matches arr1[i], continue with arr1[i]
        if (arr2[j] === arr1[i]) {
            i++;
        }
        // If i reaches end
        if (i === arr1.length) {
            return true;
        }
        // Move j up while all is happening
        j++;
    }
    return false;
}

console.log(isSubsequence('sing', 'stiging')); // True