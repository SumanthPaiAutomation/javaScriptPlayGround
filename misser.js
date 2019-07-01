let arrays4=[19,18,17,15];
function missEle(arraysNum){
    let output =[];
let sum=0;
let expectedSum=0;
for(var i=0;i<arrays4.length;i++){
    sum =sum + arrays4[i];
}
output=arrays4.sort(function(a,b){return a-b});
console.log(output);
let inter=[];

let start=output[0];

let end = output[3];

for(var i=start;i<=end;i++){

inter.push(i)

}
console.log(inter);
for(var j=0 ;j<inter.length;j++){
    expectedSum+=inter[j];
}
return(Math.abs(expectedSum-sum));

}
console.log(missEle(arrays4))


