// Hash Tables are used to store key-value pairs
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are fast for: finding, adding, and removing
// To implement a hash table, we'll be using an array.
// In order to look up values by key, we need a way to *convert keys into valid array indices*. (called a hash function)
// A good hash function is: 
// 1. Fast 
// 2. Doesn't cluster outputs at specific indices but distributes uniformly
// 3. Deterministic (same input yields same output)
// How to handle collisions: 
// - Separate Chaining (nested DS at same spot/index) or Linear Probing (move it one over)

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    // set() pseudocode:
    // 1. Accepts a key and a value
    // 2. Hashes the key
    // 3. Stores the key-value pair in the hash table array via separate chaining
    set(key,value) {    // 1.
        let index = this._hash(key);    // 2.
        // 3.
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    // get() pseudocode:
    // 1. Accepts a key
    // 2. Hashes a key
    // 3. Retrieve the key-value pair in the hash table
    get(key) {

    }
}

let ht = new HashTable(17);
console.log(ht.set("maroon","#800000"));
console.log(ht.set("yellow","#FFFF00"));
console.log(ht.set("olive","#808000"));
console.log(ht.set("salmon","#FA8072"));
console.log(ht.set("lightcoral","#F08080"));
console.log(ht.set("mediumvioletred","#C71585"));
console.log(ht.set("plum","#DDA0DD"));