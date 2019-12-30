// Write a function called findLongest Substring
// Which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // Index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // Store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('thisisawesome')); // 6: awesom