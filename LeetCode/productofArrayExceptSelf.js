// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
let output=[]
let totalProduct=1
var productExceptSelf = function(nums) {
    for(let eachNumber of nums){
        totalProduct*=eachNumber
    }
    for(let i=0;i<nums.length;i++){
        output.push(totalProduct/nums[i])
    }
    return output
};
let numslist=[1,2,3,4]
console.log(productExceptSelf(numslist))

// function productExceptSelf(nums) {
//     const n = nums.length;
//     const answer = new Array(n).fill(1);
    
//     // Calculate prefix products
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         answer[i] = prefix;
//         prefix *= nums[i];
//     }
    
//     // Calculate suffix products and multiply with prefix products
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         answer[i] *= suffix;
//         suffix *= nums[i];
//     }
    
//     return answer;
// }