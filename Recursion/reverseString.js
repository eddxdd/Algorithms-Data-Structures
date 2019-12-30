// Write a recursive function called reverse
// Which accepts a string and returns a new string in reverse

function reverse(str) {
    if (str.length == "") return "";
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('hello')); // olleh

// first iteration: return reverse('ello') + 'h' // returned word until now: 'h'
// second iteration: return reverse('llo') + 'e' // returned word until now: 'eh'
// third iteration: return reverse('lo') + 'l' // returned word until now: 'leh'
// fourth iteration: return reverse('o') + 'l' // returned word until now: 'lleh'
// fifth iteration: return reverse('') + 'o' // returned word until now: 'olleh'
// sixth iteration: return '' // loop finished and returned word is 'olleh'