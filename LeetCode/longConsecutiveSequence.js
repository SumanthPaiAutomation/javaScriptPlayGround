/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longest = 0;

    for (const num of numSet) { // iterate set instead of array to avoid duplicates
        // Only start if it's the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
};
