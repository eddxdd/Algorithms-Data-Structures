function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  // Empty object
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Loop over every value in the array
  // "For each val in arr1"
  for (let val of arr1) {
    // If value exists, add +1 to frequencyCounter. Otherwise, initiate it with 1.
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // "For each key in frequencyCounter1"
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // Check if the correct number is squared
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1,2,3,3,4], [1,4,9,16,9])); // True