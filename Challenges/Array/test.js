function productExceptSelf(nums) {
    let L = [];
    let R = [];
    let output = [];

    L[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        L[i] = L[i-1] * nums[i-1];
    }

    R[nums.length - 1] = 1;
    for (let j = nums.length-2; j >= 0; j--) {
        R[j] = R[j+1] * nums[j+1];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = L[i] * R[i];
    }

    return output;
}

function productExceptSelfOptimal(nums) {
    let output = [];

    output[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i-1] * nums[i-1];
    }

    let R = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        output[i] *= R;
        R *= nums[i];
    }
    return output;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelfOptimal([1,2,3,4]));