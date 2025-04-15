
// kadanes algorithm
// let negBoolean=false
// var maxSubArray = function(nums) {
//     if(nums.length==1) return nums[0]
//     let totalSum=0
//     for(let eachNumber of nums){
//         totalSum+=eachNumber    
//     }
//     for(let someNumber of nums){
//         if(someNumber<0){
//         negBoolean=true
//         break
//         }
//     }
    
//     let greaterSum=0
//     for(let i=0;i<nums.length;i++){
//         j=i+1
//         while(j<nums.length){
//             if(nums[j]+nums[j]>greaterSum){
//                 greaterSum+=nums[j]+nums[j]
//             }
//         }
//     }
//     return negBoolean == true ? greaterSum : totalSum;
// };

var maxSubArray = function(nums) {
    // Edge case: if there's only one element
    if (nums.length === 1) return nums[0];
    
    let maxSum = nums[0];       // Initialize to first element
    let currentSum = nums[0];   // Initialize current sum to first element
    
    // Start from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // For each element, decide whether to start a new subarray or extend the existing one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maxSum if we found a better sum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};