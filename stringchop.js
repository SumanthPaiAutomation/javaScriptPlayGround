function stringChop(stringer,len){
    let output=[];
    if(len == undefined){
        output.push(stringer);
        return output; // return first as there is no else
    }
    for(var i=0;i<stringer.length;i=i+len){
        output.push(stringer.slice(i,i+len));
    }
    return output;
}
console.log(stringChop('dctacademy',2));
console.log(stringChop('dctacademy',3));