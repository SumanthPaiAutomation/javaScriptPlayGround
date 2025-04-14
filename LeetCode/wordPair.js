function revWord(word){
    return word.split('').reverse().join('')
}

var maximumNumberOfStringPairs = function(words) {
    let wordPair=0
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words,length;j++){
            if(revWord(words[i])===words[j]){
                wordPair++
            }
        }
    }
    return wordPair
};
