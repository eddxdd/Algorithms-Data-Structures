// Hash Tables are used to store key-value pairs
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are fast for: finding, adding, and removing
// To implement a hash table, we'll be using an array.
// In order to look up values by key, we need a way to *convert keys into valid array indices*. (called a hash function)
// A good hash function is: 
// 1. Fast 
// 2. Doesn't cluster outputs at specific indices but distributes uniformly
// 3. Deterministic (same input yields same output)