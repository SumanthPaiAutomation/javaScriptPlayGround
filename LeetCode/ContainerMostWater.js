/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0
    let right=height.length-1
    let ans=0
    while(left<right){
        let heightOfContainer=Math.min(height[left],height[right])
        let width= right-left
        let area= width*heightOfContainer
        if(area>ans){
            ans=area
        }
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return ans
};