/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let countString = 0;

    // Function to count the frequency of words in a list
    function findFrequency(wordsList) {
        let wordMapper = new Map();
        wordsList.forEach(word => {
            wordMapper.set(word, (wordMapper.get(word) || 0) + 1);
        });
        return wordMapper;
    }

    let word1Map = findFrequency(words1);
    let word2Map = findFrequency(words2);

    // Iterate over word1Map and check if the word appears exactly once in both arrays
    word1Map.forEach((count1, word) => {
        let count2 = word2Map.get(word) || 0;
        // Check if the word appears exactly once in both arrays
        if (count1 === 1 && count2 === 1) {
            countString++;
        }
    });

    return countString;
};