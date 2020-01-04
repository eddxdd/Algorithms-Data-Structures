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