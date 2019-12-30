// Write a recursive function called capitalizeFirst
// Given an array of strings, capitalize the first letter of each string

function capitalizeFirst(arr) {
    // "If there's only one letter"
    if (arr.length === 1) {
        // Convert that letter toUpperCase
        return [arr[0][0].toUpperCase() + arr[0].substring(1)];
    }
    // Slice last
    const res = capitalizeFirst(arr.slice(0,-1));
    // Slice everything but the last
    // And convert first letter toUpperCase
    // + substring(1) to remove the (first value), ex: "T(t)aco, B(b)anana"
    const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substring(1);
    // Push it all to res
    res.push(string);
    return res;
}

console.log(capitalizeFirst(['car','taco','banana'])); 
// ['Car','Taco','Banana']