// Write a function called linearSearch
// Goes through an array and finds n
// For linear search algo, the array can be unsorted

function linearSearch(arr, n){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
}

console.log(linearSearch([10,15,20,25,30],15)); // 1