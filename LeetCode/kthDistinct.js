//A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an 
// integer k, return the kth distinct string 
// present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.


// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned. 

var kthDistinct = function(arr, k) {
    let myMapper = new Map();

    // Count the frequency of each string in arr
    for (let str of arr) {
        myMapper.set(str, (myMapper.get(str) || 0) + 1);
    }

    // Collect distinct strings (those with count = 1)
    let distinctStrings = arr.filter(str => myMapper.get(str) === 1);

    // Return the k-th distinct string, or empty string if not enough distinct strings
    return distinctStrings[k - 1] || "";
};

let arr = ["d", "b", "c", "b", "c", "a"];
let k = 2;
console.log(kthDistinct(arr, k)); // Should return 'd'
