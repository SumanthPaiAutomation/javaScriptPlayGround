/**
 * @param {number[]} height
 * @return {number}
 */

//water trap= Math.min(leftmax(nums,index),rightMax(nums,index))-nums[i]
var trap = function(height) {
    if (height.length <= 2) return 0; // Need at least 3 bars to trap water
    
    let totalWaterTrap = 0;
    
    for (let i = 1; i < height.length - 1; i++) {
        // Find the maximum height to the left
        const leftMax = findLeftMax(height, i);
        
        // Find the maximum height to the right
        const rightMax = findRightMax(height, i);
        
        // The water level is determined by the minimum of the two sides
        const waterLevel = Math.min(leftMax, rightMax);
        
        // If water level is higher than current bar, add the trapped water
        if (waterLevel > height[i]) {
            totalWaterTrap += waterLevel - height[i];
        }
    }
    
    return totalWaterTrap;
};

function findLeftMax(nums, index) {
    let leftMaxer = nums[0];
    for (let i = 1; i < index; i++) {
        if (nums[i] > leftMaxer) {
            leftMaxer = nums[i];
        }
    }
    return leftMaxer;
}

function findRightMax(nums, index) {
    // Initialize with the element after the current position
    if (index >= nums.length - 1) return 0; // Handle edge case
    
    let rightMaxer = nums[index + 1];
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] > rightMaxer) {
            rightMaxer = nums[i];
        }
    }
    return rightMaxer;
}
