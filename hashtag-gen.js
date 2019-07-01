const hash = 'make in india'

function hashGen(str){
let output = '#'
const words = str.split(' ')
for (var i=0;i<=words.length;i++){
const cpWord= words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
output = output+cpWord

}
return output;

}
console.log(hashGen(hash))