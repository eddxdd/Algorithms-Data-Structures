// Write a recursive function called isPalindrome
// Which returns true if the string passed to it is a palindrome (reads the same forward and backward)

function isPalindrome(str) {
    // If there is only one letter, return true
    if(str.length === 1) return true;
    // If there are two letters, then check if they're the same
    if(str.length === 2) return str[0] === str[1];
    // If char at 0 is equal to the last char
    // Repeat this process
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

console.log(isPalindrome('racecar')); // True