//You are given a string allowed consisting of distinct characters 
// and an array of strings words. A string is consistent if 
// all characters in the string appear in the string allowed.
//Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.


var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed); // Faster lookup
    let allowedWordsCount = 0;

    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) allowedWordsCount++;
    }

    return allowedWordsCount;
};

let allowed = "ab";
let words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2

