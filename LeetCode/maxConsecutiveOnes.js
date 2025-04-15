// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function(nums) {
    let count=0
    let ans=0
    nums.forEach(eachNumber=>{
        if(eachNumber==1){
            count++
        ans=Math.max(ans,count)}
        else {count=0
        }
   })
   return ans
};
let numsArray = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(numsArray))

