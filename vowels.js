function vowelCount(str){
const vowels = 'aeiou'
let count =0
for(var i=0;i<=str.length;i++){
    if(vowels.includes(str[i])){
        count++
    }

}
return count


}

console.log(vowelCount('Mysore'))