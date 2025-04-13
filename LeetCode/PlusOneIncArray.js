var plusOne = function(digits) {
    // Convert to BigInt for very large numbers
    let str = digits.join('');
    let incNumber = BigInt(str) + 1n;

    // Convert back to array of digits
    return incNumber.toString().split('').map(Number);
};

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].